import { 
  ExteriorNodeLabelModel,
  HierarchicalLayout,
  OrthogonalLayout,
  IGraph,
  ImageNodeStyle,
  Stroke,
  CircularLayout,
  OrganicLayout,
  LabelStyle,
  PolylineEdgeStyle,
  TreeLayout,
  HierarchicalLayoutRoutingStyle,
  RecursiveEdgePolicy,
  EdgeLabelPlacement,
  NodeLabelPlacement,
  RadialEdgeLabelPlacement,
  RadialEdgeLabelPlacementStringValues,
  RadialNodeLabelPlacementStringValues,
  RadialNodeLabelPlacement,
  EdgeLabelPreferredPlacement,
  LabelEdgeSidesStringValues,
  LabelAlongEdgePlacementsStringValues,
  HierarchicalLayoutData,
  OrthogonalLayoutData,
  OrganicLayoutData,
  TreeLayoutData,
  LabelAngleReferences,
  FreeEdgeLabelModel,
  ShapeNodeStyle 
} from '@yfiles/yfiles';

import backhaulIcon from '../assets/Internet Cloud.png';
import switchHalfGreen from '../assets/Red-4 5.png';
import switchHalfYellow from '../assets/Red-4 6.png';
import unkownIcon from '../assets/Group 862.png';
import switchDYellow from '../assets/Asset 11@2x.png';
import switchDGreen from '../assets/Asset 11@2x (1).png';
import Internet from '../assets/Internet Cloud (1).png';
import WAN from '../assets/Internet Cloud (2).png';

import fireWallYellow from '../assets/Red-4 4.png';
import fireWallRed from '../assets/Red-4 1.png';
import loadBalancerRed from '../assets/Asset 11@2x (5).png';
import loadBalancerYellow from '../assets/Asset 11@2x (4).png';
import loadBalancerGreen from '../assets/Asset 11@2x (3).png';

import { DeviceType, LabelPlacementOrientation, NetworkData } from '../types/types';
import { mapAlongEdge, mapCircularEdgeRoutingPolicy, mapClusteringPolicy, mapEdgeRoutingStyle, mapEdgeSide, mapOrientationToLayoutOrientation, mapPartitioningPolicy, mapRecursiveEdgePolicy } from './mappingFunctions';
import '../styles/ReactGraphComponent.css';
import '../index.css'

type EdgeLabelPlacementStringValues = "ignore" | "integrated" | "generic";
type NodeLabelPlacementStringValues = "ignore" | "consider" | "generic";

interface LayoutConfig {
  nodeDistance?: number;
  nodeToEdgeDistance?: number;
  edgeDistance?: number;
  minimumLayerDistance?: number;
  stopDuration?: number;
  layoutOrientation?: string;
  edgeRoutingStyle?: HierarchicalLayoutRoutingStyle | string;
  backloopRouting?: boolean;
  automaticEdgeGrouping?: boolean;
  automaticBusRouting?: boolean;
  highlightCriticalPath?: boolean;
  minimumFirstSegmentLength?: number;
  minimumLastSegmentLength?: number;
  minimumEdgeLength?: number;
  minimumEdgeDistance?: number;
  minimumSlope?: number;
  arrowsDefineEdgeDirection?: boolean;
  considerEdgeThickness?: boolean;
  recursiveEdgeRoutingStyle?: RecursiveEdgePolicy | string;
  uTurnSymmetry?: number;
  allowShortcuts?: boolean;
  sampleHierarchical?: boolean;

  edgeLabelPlacementHierarchical: EdgeLabelPlacement | EdgeLabelPlacementStringValues;
  nodeLabelPlacementHierarchical: NodeLabelPlacement | NodeLabelPlacementStringValues;
  edgeOrientation: LabelPlacementOrientation;
  alongEdge: LabelAlongEdgePlacementsStringValues;
  sideOfSide: LabelEdgeSidesStringValues;

  preferredEdgeLength?: number;
  minimumNodeDistance?: number;
  avoidNodeEdgeOverlap?: boolean;
  compactness?: number;
  organicOrientation?: string;
  clustering?: string;

  edgeLabelPlacementOrganic: EdgeLabelPlacement | EdgeLabelPlacementStringValues;
  nodeLabelPlacementOrganic: NodeLabelPlacement | NodeLabelPlacementStringValues;
  edgeOrientationOrganic: LabelPlacementOrientation; 
  alongEdgeOrganic: LabelAlongEdgePlacementsStringValues;
  sideOfSideOrganic: LabelEdgeSidesStringValues;
  
  gridSpacing?: number;
  layoutMode?: string;
  minimumFirstSegmentLengthOrthogonal?: number;
  minimumSegmentLength?: number;
  minimumLastSegmentLengthOrthogonal?: number;
  routeSelectedEdgesDownwards?: boolean;
  edgeLabelPlacementOrthogonal: EdgeLabelPlacement | EdgeLabelPlacementStringValues;
  nodeLabelPlacementOrthogonal: NodeLabelPlacement | NodeLabelPlacementStringValues;
  edgeOrientationOrthogonal: LabelPlacementOrientation; 
  alongEdgeOrthogonal: LabelAlongEdgePlacementsStringValues;
  sideOfSideOrthogonal: LabelEdgeSidesStringValues;
  
  partitioningPolicy?: string;
  fromSketchMode?: boolean;
  enableEdgeBundling: boolean;
  bundlingStrength: number;
  edgeRoutingStyleCircular: string;
  edgeLabelPlacementCircular: RadialEdgeLabelPlacement | RadialEdgeLabelPlacementStringValues | undefined;
  nodeLabelPlacementCircular: RadialNodeLabelPlacement | RadialNodeLabelPlacementStringValues | undefined;
  edgeOrientationCircular: LabelPlacementOrientation; 
  alongEdgeCircular: LabelAlongEdgePlacementsStringValues;
  sideOfSideCircular: LabelEdgeSidesStringValues;

  treeOrientation?: string;
  edgeLabelPlacementTree: EdgeLabelPlacement | EdgeLabelPlacementStringValues;
  nodeLabelPlacementTree: NodeLabelPlacement | NodeLabelPlacementStringValues;
  edgeOrientationTreeTree: LabelPlacementOrientation;
  alongEdgeTree: LabelAlongEdgePlacementsStringValues;
  sideOfSideTree: LabelEdgeSidesStringValues;
}

export function createSampleGraph(graph: IGraph, layout: string, config: LayoutConfig, networkData: NetworkData): void {
  const nodeMap = new Map();
  const groupMap = new Map<string, any>();
 
  console.log("groupMap nodes: ",groupMap);
  console.log("nodeMap nodes: ",nodeMap);
  
  networkData.nodes.forEach((node) => {
    const newNode = graph.createNodeAt({ location: [0, 0] });
    let iconPath;
    if (node.type === DeviceType.FAT_SWITCH) {
      iconPath = node.status === 'warning' ? switchHalfYellow : switchHalfGreen;
    } else if (node.type === DeviceType.SWITCH) {
      iconPath = node.status === 'warning' ? switchDYellow : switchDGreen;
    } else if (node.type === DeviceType.BACKHAUL) {
      iconPath = backhaulIcon;
    } else if (node.type === DeviceType.UNKNOWN) {
      iconPath = unkownIcon;
    } else if (node.type === DeviceType.INTERNET) {
      iconPath = Internet;
    } else if (node.type === DeviceType.WAN) {
      iconPath = WAN;
    } else if (node.type === DeviceType.FIREWALL) {
      iconPath = node.status === 'warning' ? fireWallYellow : fireWallRed;
    } else if (node.type === DeviceType.LOAD_BALANCER) {
      if (node.status === 'warning') {
        iconPath = loadBalancerYellow;
      } else if (node.status === 'active') {
        iconPath = loadBalancerGreen;
      } else if (node.status === 'inactive') {
        iconPath = loadBalancerRed;
      }
    }
    
    const nodeStyle = new ImageNodeStyle({ href: iconPath, aspectRatio: 1 });
    graph.setStyle(newNode, nodeStyle);

    const labelModel = new ExteriorNodeLabelModel();
    const labelText = node.label ? `${node.label}\n${node.ip}` : '';
    const labelParameter = labelModel.createParameter('bottom');
    
    let label = null;
    if (node.label) {
      label = graph.addLabel({ owner: newNode, text: labelText, layoutParameter: labelParameter });
    }

    newNode.tag = { labelText, labelParameter, label, data: node };
    nodeMap.set(node.id, newNode);
  });
  // grouping logic
  if (config.sampleHierarchical && networkData.groups && networkData.groups.length > 0) {
    networkData.groups.forEach((group) => {
      const groupNode = graph.createGroupNode();
      // console.log('logginggggggggggggggggggggggggggggg', groupNode);
      const nodeStyle = new ShapeNodeStyle({
        shape: 'round-rectangle',
        fill: '#ffe6f9',
        stroke: new Stroke('#4d003b', 1.8),
        // cssClass: 'group-node',
      });
      graph.setStyle(groupNode, nodeStyle);

      const labelModel = new ExteriorNodeLabelModel();
      const label = graph.addLabel({
        owner: groupNode,
        text: group.label!,
        layoutParameter: labelModel.createParameter('bottom'),
        style: new LabelStyle({
          textFill: 'black',
          cssClass: 'group-tab',
          textSize: 15,
          backgroundFill: '#ff80e1',
          verticalTextAlignment:'center',
          wrapping: 'wrap-word',
          padding: 8,
          minimumSize: { width: 20, height: 20 },
          backgroundStroke: '1px solid #242265',
          shape: 'pill',
          font : 'italic Tahoma'
        }), 
      });

      const nodesToGroup = group.nodeIds.map((nodeId) => nodeMap.get(nodeId)).filter(Boolean);
      if (nodesToGroup.length > 0) {
        graph.groupNodes(groupNode, nodesToGroup);
      }
      groupMap.set(group.id, groupNode); 
      // console.log('Nodes to grouppppppppppppppp-:',nodesToGroup);
    });
  }

  const edgeLabelModel = new FreeEdgeLabelModel();

  networkData.connections.forEach((edge) => {
    const sourceNode = nodeMap.get(edge.source);
    const targetNode = nodeMap.get(edge.target) || groupMap.get(edge.target); 
    console.log("Target Node: ====", groupMap.get(edge.target))
    if (sourceNode && targetNode) {
      const graphEdge = graph.createEdge(sourceNode, targetNode);
      let edgeStyle: PolylineEdgeStyle;
      edgeStyle = new PolylineEdgeStyle({
        smoothingLength: 10,
      });
      
      edgeStyle.stroke = new Stroke({
        fill: edge.color || '#000000',
        thickness: config.considerEdgeThickness ? 2.0 : 1.0,
        dashStyle: edge.dashed ? 'dash' : 'solid',
      });
      if (config.arrowsDefineEdgeDirection) {
        edgeStyle.targetArrow = 'default';
      }
      
      graph.setStyle(graphEdge, edgeStyle);

      if (edge.label) {
        const label = graph.addLabel({
          owner: graphEdge,
          text: edge.label,
          layoutParameter: edgeLabelModel.createParameter(),
        });
        graph.setStyle(label, new LabelStyle({
          backgroundFill: '#B0D4FF',
          backgroundStroke: new Stroke({
            fill: '#000000',
            thickness: 1.8,
            dashStyle: 'dash',
          }),
          padding: [5, 5, 5, 5],
          textSize: 10,
          textFill: '#000000', 
          autoFlip: false,
        }));
      }
      // console.log(`Edge created: ${edge.source} -> ${edge.target}`); 
    } else {
      console.warn(`Edge skipped: Source ${edge.source} or target ${edge.target} not found in nodeMap or groupMap. SourceNode: ${sourceNode}, TargetNode: ${targetNode}`);
    }
    
  });

  let layoutAlgorithm;
  let layoutData;

  const applyLabelOrientation = (descriptor: EdgeLabelPreferredPlacement, orientation: any) => {
    switch (orientation) {
      case 'Parallel':
        descriptor.angle = 0.0;
        descriptor.angleReference = LabelAngleReferences.RELATIVE_TO_EDGE_FLOW;
        break;
      case 'Orthogonal':
        descriptor.angle = Math.PI / 2;
        descriptor.angleReference = LabelAngleReferences.RELATIVE_TO_EDGE_FLOW;
        break;
      case 'Horizontal':
        descriptor.angle = 0.0;
        descriptor.angleReference = LabelAngleReferences.ABSOLUTE;
        break;
      case 'Vertical':
        descriptor.angle = Math.PI / 2;
        descriptor.angleReference = LabelAngleReferences.ABSOLUTE;
        break;
      default:
        descriptor.angle = 0.0;
        descriptor.angleReference = LabelAngleReferences.RELATIVE_TO_EDGE_FLOW;
        break;
    }
  };

  if (layout === 'Hierarchical') {
    layoutAlgorithm = new HierarchicalLayout({
      layoutOrientation: mapOrientationToLayoutOrientation(config.layoutOrientation || 'Top to Bottom'),
      nodeDistance: config.nodeDistance || 50, 
      nodeToEdgeDistance: config.nodeToEdgeDistance || 5,
      edgeDistance: config.edgeDistance || 30, 
      minimumLayerDistance: config.minimumLayerDistance || 5,
      stopDuration: config.stopDuration,
      defaultEdgeDescriptor: {
        routingStyleDescriptor: {
          defaultRoutingStyle: mapEdgeRoutingStyle(config.edgeRoutingStyle),
        },
        backLoopRouting: config.backloopRouting,
        minimumFirstSegmentLength: config.minimumFirstSegmentLength,
        minimumLastSegmentLength: config.minimumLastSegmentLength,
        minimumLength: config.minimumEdgeLength,
        minimumDistance: config.minimumEdgeDistance,
        recursiveEdgePolicy: mapRecursiveEdgePolicy(config.recursiveEdgeRoutingStyle),
      },
      edgeLabelPlacement: config.edgeLabelPlacementHierarchical as EdgeLabelPlacement,
      nodeLabelPlacement: config.nodeLabelPlacementHierarchical as NodeLabelPlacement,
      automaticEdgeGrouping: false,
    });
  
    layoutData = new HierarchicalLayoutData({
      edgeLabelPreferredPlacements: () => {
        const descriptor = new EdgeLabelPreferredPlacement({
          placementAlongEdge: mapAlongEdge(config.alongEdge),
          edgeSide: mapEdgeSide(config.sideOfSide),
        });
        applyLabelOrientation(descriptor, config.edgeOrientation);
        return descriptor;
      },
    });
  }
  else if (layout === 'Orthogonal') {
    layoutAlgorithm = new OrthogonalLayout({
      gridSpacing: config.gridSpacing || 30,
      layoutMode: config.layoutMode === 'Forced Straight Line' ? 'forced-straight-line' : config.layoutMode === 'Relaxed' ? 'relaxed' : 'strict',
      defaultEdgeDescriptor: {
        minimumFirstSegmentLength: config.minimumFirstSegmentLengthOrthogonal || 10,
        minimumSegmentLength: config.minimumSegmentLength || 10,
        minimumLastSegmentLength: config.minimumLastSegmentLengthOrthogonal || 10,
      },
      edgeLabelPlacement: config.edgeLabelPlacementOrthogonal,
      nodeLabelPlacement: config.nodeLabelPlacementOrthogonal,
    });

    layoutData = new OrthogonalLayoutData({
      edgeLabelPreferredPlacements: () => {
        const descriptor = new EdgeLabelPreferredPlacement({
          placementAlongEdge: mapAlongEdge(config.alongEdgeOrthogonal),
          edgeSide: mapEdgeSide(config.sideOfSideOrthogonal),
        });
        applyLabelOrientation(descriptor, config.edgeOrientationOrthogonal);
        return descriptor;
      },
    });
  } else if (layout === 'Circular') {
    layoutAlgorithm = new CircularLayout({
      partitioningPolicy: mapPartitioningPolicy(config.partitioningPolicy || 'BCC Compact'),
      fromSketchMode: config.fromSketchMode || false,
      edgeRoutingPolicy: mapCircularEdgeRoutingPolicy(config.edgeRoutingStyleCircular),
      edgeBundling: {
        bundlingStrength: config.bundlingStrength,
        defaultBundleDescriptor: {
          bundled: config.enableEdgeBundling
        }
      },
      edgeLabelPlacement: config.edgeLabelPlacementCircular,
      nodeLabelPlacement: config.nodeLabelPlacementCircular,
    });

    layoutData = new OrganicLayoutData({ 
      edgeLabelPreferredPlacements: () => {
        const descriptor = new EdgeLabelPreferredPlacement({
          placementAlongEdge: mapAlongEdge(config.alongEdgeCircular),
          edgeSide: mapEdgeSide(config.sideOfSideCircular),
        });
        applyLabelOrientation(descriptor, config.edgeOrientationCircular);
        return descriptor;
      },
    });
  } else if (layout === 'Organic') {
    layoutAlgorithm = new OrganicLayout({
      layoutOrientation: mapOrientationToLayoutOrientation(config.organicOrientation || 'Top to Bottom'),
      clusteringPolicy: mapClusteringPolicy(config.clustering || 'Edge Betweenness'),
      defaultPreferredEdgeLength: config.preferredEdgeLength || 3,
      defaultMinimumNodeDistance: config.minimumNodeDistance || 4,
      compactnessFactor: config.compactness || 0.2,
      avoidNodeEdgeOverlap: config.avoidNodeEdgeOverlap || false,
      edgeLabelPlacement: config.edgeLabelPlacementOrganic,
      nodeLabelPlacement: config.nodeLabelPlacementOrganic,
    });

    layoutData = new OrganicLayoutData({
      edgeLabelPreferredPlacements: () => {
        const descriptor = new EdgeLabelPreferredPlacement({
          placementAlongEdge: mapAlongEdge(config.alongEdgeOrganic),
          edgeSide: mapEdgeSide(config.sideOfSideOrganic),
        });
        applyLabelOrientation(descriptor, config.edgeOrientationOrganic);
        return descriptor;
      },
    });
  } else if (layout === 'Tree') {
    layoutAlgorithm = new TreeLayout({
      layoutOrientation: mapOrientationToLayoutOrientation(config.treeOrientation || 'Top to Bottom'),
      edgeLabelPlacement: config.edgeLabelPlacementTree,
      nodeLabelPlacement: config.nodeLabelPlacementTree,
    });

    layoutData = new TreeLayoutData({
      edgeLabelPreferredPlacements: () => {
        const descriptor = new EdgeLabelPreferredPlacement({
          placementAlongEdge: mapAlongEdge(config.alongEdgeTree),
          edgeSide: mapEdgeSide(config.sideOfSideTree),
        });
        applyLabelOrientation(descriptor, config.edgeOrientationTreeTree);
        return descriptor;
      },
    });
  }

  if (layoutAlgorithm) {
    graph.applyLayout(layoutAlgorithm, layoutData);
  }
}