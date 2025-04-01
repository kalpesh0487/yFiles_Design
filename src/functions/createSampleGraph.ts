import { 
  BezierEdgeStyle,
  ExteriorNodeLabelModel, 
  HierarchicalLayout, 
  OrthogonalLayout,
  IGraph, 
  ImageNodeStyle, 
  Rect,
  Stroke, 
  CircularLayout,
  OrganicLayout,
  LabelStyle,
  PolylineEdgeStyle,
  TreeLayout,
  LayoutOrientation,
  OrganicLayoutClusteringPolicy,
  CircularLayoutPartitioningPolicy,
} from '@yfiles/yfiles';
import backhaulIcon from '../assets/Internet Cloud.png';
import switchHalfGreen from '../assets/Red-4 5.png';
import switchHalfYellow from '../assets/Red-4 6.png';
import unkownIcon from '../assets/Group 862.png';
import switchDYellow from '../assets/Asset 11@2x.png';
import switchDGreen from '../assets/Asset 11@2x (1).png';
import Internet from '../assets/Internet Cloud (1).png';
import WAN from '../assets/Internet Cloud (2).png';
import { NetworkData } from '../types/types';

interface LayoutConfig {
  
  nodeDistance?: number;
  nodeToEdgeDistance?: number;
  edgeDistance?: number;
  minimumLayerDistance?: number;
  stopDuration?: number;
  layoutOrientation?: string;
  
  preferredEdgeLength?: number;
  minimumNodeDistance?: number;
  avoidNodeEdgeOverlap?: boolean;
  compactness?: number;
  organicOrientation?: string;
  clustering?: string;
  
  gridSpacing?: number;
  layoutMode?: string;
  
  partitioningPolicy?: string;
  fromSketchMode?: boolean;
  
  treeOrientation?: string;
}

function mapOrientationToLayoutOrientation(orientation: string): LayoutOrientation {
  switch (orientation) {
    case 'Top to Bottom':
      return LayoutOrientation.TOP_TO_BOTTOM;
    case 'Left to Right':
      return LayoutOrientation.LEFT_TO_RIGHT;
    case 'Bottom to Top':
      return LayoutOrientation.BOTTOM_TO_TOP;
    case 'Right to Left':
      return LayoutOrientation.RIGHT_TO_LEFT;
    case 'none':
    default:
      return LayoutOrientation.TOP_TO_BOTTOM;
  }
}

function mapClusteringPolicy(policy: string): OrganicLayoutClusteringPolicy {
  switch (policy) {
    case 'None':
      return OrganicLayoutClusteringPolicy.NONE;
    case 'Edge Betweenness':
      return OrganicLayoutClusteringPolicy.EDGE_BETWEENNESS;
    case 'Label Propagation':
      return OrganicLayoutClusteringPolicy.LABEL_PROPAGATION;
    case 'Louvain Modularity':
      return OrganicLayoutClusteringPolicy.LOUVAIN_MODULARITY;
    default:
      return OrganicLayoutClusteringPolicy.EDGE_BETWEENNESS;
  }
}

function mapPartitioningPolicy(policy: string): CircularLayoutPartitioningPolicy {
  switch (policy) {
    case 'BCC Compact':
      return CircularLayoutPartitioningPolicy.BCC_COMPACT;
    case 'BCC Isolated':
      return CircularLayoutPartitioningPolicy.BCC_ISOLATED;
    // case 'Custom Groups':
    //   return CircularLayoutPartitioningPolicy.CUSTOM_GROUPS;
    case 'Single Cycle':
      return CircularLayoutPartitioningPolicy.SINGLE_CYCLE;
    default:
      return CircularLayoutPartitioningPolicy.BCC_COMPACT;
  }
}

export function createSampleGraph(graph: IGraph, layout: string, config: LayoutConfig, networkData: NetworkData): void {
  const nodeMap = new Map();

  networkData.nodes.forEach((node) => {
    const newNode = graph.createNodeAt({ location: [0, 0] });
    let iconPath;
    if (node.type === 'fat-switch') {
      iconPath = node.status === 'warning' ? switchHalfYellow : switchHalfGreen;
    } else if (node.type === 'switch') {
      iconPath = node.status === 'warning' ? switchDYellow : switchDGreen;
    } else if (node.type === 'backhaul') {
      iconPath = backhaulIcon;
    } else if (node.type === 'unknown') {
      iconPath = unkownIcon;
    } else if (node.type === 'internet') {
      iconPath = Internet;
    } else if (node.type === 'WAN') {
      iconPath = WAN;
    }
    
    const nodeStyle = new ImageNodeStyle({ href: iconPath, aspectRatio: 1 });
    graph.setStyle(newNode, nodeStyle);

    const labelModel = new ExteriorNodeLabelModel();
    const labelText = node.label ? `${node.label}\n${node.ip}` : '';
    const labelParameter = labelModel.createParameter('bottom-left');
    
    let label = null;
    if (node.label) {
      label = graph.addLabel({ owner: newNode, text: labelText, layoutParameter: labelParameter });
    }

    newNode.tag = { labelText, labelParameter, label, data: node };
    nodeMap.set(node.id, newNode);
  });

  networkData.connections.forEach(edge => {
    const sourceNode = nodeMap.get(edge.source);
    const targetNode = nodeMap.get(edge.target);
    
    if (sourceNode && targetNode) {
      const graphEdge = graph.createEdge(sourceNode, targetNode);
      const edgeStyle = new PolylineEdgeStyle({
        smoothingLength: 50,
      });
      
      edgeStyle.stroke = new Stroke({
        fill: edge.color || '#000000',
        thickness: 2.4,
        dashStyle: edge.dashed ? 'dash' : 'solid',
      });

      graph.setStyle(graphEdge, edgeStyle);

      if (edge.label) {
        const label = graph.addLabel(graphEdge, edge.label);
        graph.setStyle(label, new LabelStyle({
          backgroundFill: '#B0D4FF',
          backgroundStroke: new Stroke({
            fill: '#000000',
            thickness: 1.8,
            dashStyle: 'dash'  
          }),
          padding: [5, 5, 5, 5],
          textSize: 10,
          textFill: '#000000',
        }));
      }
    }
  });

  let layoutAlgorithm;
  
  if (layout === 'Hierarchical') {
    layoutAlgorithm = new HierarchicalLayout({
      layoutOrientation: mapOrientationToLayoutOrientation(config.layoutOrientation || 'Top to Bottom'),
      nodeDistance: config.nodeDistance || 25,
      nodeToEdgeDistance: config.nodeToEdgeDistance || 5,
      edgeDistance: config.edgeDistance || 17,
      minimumLayerDistance: config.minimumLayerDistance || 5,
      stopDuration: config.stopDuration,
    });
  } else if (layout === 'Orthogonal') {
    layoutAlgorithm = new OrthogonalLayout({
      gridSpacing: config.gridSpacing || 30,
      layoutMode: config.layoutMode === 'Forced Straight Line' ? 'forced-straight-line' : config.layoutMode === 'Relaxed' ? 'relaxed' : 'strict',
    });
  } else if (layout === 'Circular') {
    layoutAlgorithm = new CircularLayout({
      partitioningPolicy: mapPartitioningPolicy(config.partitioningPolicy || 'BCC Compact'),
      fromSketchMode: config.fromSketchMode || false,
    });
  } else if (layout === 'Organic') {
    layoutAlgorithm = new OrganicLayout({
      layoutOrientation: mapOrientationToLayoutOrientation(config.organicOrientation || 'Top to Bottom'),
      clusteringPolicy: mapClusteringPolicy(config.clustering || 'Edge Betweenness'),
      defaultPreferredEdgeLength: config.preferredEdgeLength || 3,
      defaultMinimumNodeDistance: config.minimumNodeDistance || 4,
      compactnessFactor: config.compactness || 0.2,
      avoidNodeEdgeOverlap: config.avoidNodeEdgeOverlap || false,
    });
  } else if (layout === 'Tree') {
    layoutAlgorithm = new TreeLayout({
      layoutOrientation: mapOrientationToLayoutOrientation(config.treeOrientation || 'Top to Bottom'),
    });
  }

  if (layoutAlgorithm) {
    graph.applyLayout(layoutAlgorithm);
  }
}