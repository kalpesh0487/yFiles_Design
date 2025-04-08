import { useLayoutEffect, useRef, useState } from 'react';
import {
  GraphComponent,
  GraphViewerInputMode,
  License,
  LayoutExecutor,
} from '@yfiles/yfiles';
import licenseData from '../assets/license.json';
import '../styles/ReactGraphComponent.css';
import { createSampleGraph } from '../functions/createSampleGraph';
import { initializeToolTips } from '../functions/initializeToolTips';
import useHierarchicalSideBarStore from '../store/hierarchicalSideBarStore';
import useOrganicSideBarStore from '../store/sideBarOrganicStore';
import useOrthogonalSideBarStore from '../store/OrthogonalSideBarStore';
import useCircularSideBarStore from '../store/CircularSideBarStore';
import useTreeSideBarStore from '../store/TreeSidebarStore';
import Inventory from './Inventory';
import { useNetworkStore } from '../store/dataStore';
import useSideBarStore from '../store/sideBarStore';

export function ReactGraphComponent() {
  const graphComponentContainer = useRef<HTMLDivElement>(null);
  const graphComponentRef = useRef<GraphComponent | null>(null);
  const [showLabels, setShowLabels] = useState(false);

  const { layout } = useSideBarStore();
  const networkData = useNetworkStore((state) => state.networkData);
  const {
    duration,
    edgeToEdge,
    nodeToNode,
    nodeToEdge,
    layerToLayer,
    orientation: hierarchicalOrientation,
    edgeRoutingStyle,
    backloopRouting,
    automaticEdgeGrouping,
    automaticBusRouting,
    highlightCriticalPath,
    minimumFirstSegmentLength,
    minimumLastSegmentLength,
    minimumEdgeLength,
    minimumEdgeDistance,
    minimumSlope,
    arrowsDefineEdgeDirection,
    considerEdgeThickness,
    recursiveEdgeRoutingStyle,
    uTurnSymmetry,
    allowShortcuts,
    // edges
    edgeLabelPlacementHierarchical,
    nodeLabelPlacementHierarchical,
    edgeOrientation,
    alongEdge,
    sideOfSide,
  } = useHierarchicalSideBarStore();
  const {
    preferredEdgeLength,
    minimumNodeDistance,
    avoidNodeEdgeOverlap,
    compactness,
    orientation: organicOrientation,
    clustering,
    // label organic
    edgeLabelPlacementOrganic,
    nodeLabelPlacementOrganic,
    edgeOrientationOrganic,
    alongEdgeOrganic,
    sideOfSideOrganic,
  } = useOrganicSideBarStore();
  const { 
    gridSpacing, 
    layoutMode, 
    minimumFirstSegmentLengthOrthogonal,
    minimumSegmentLength,
    minimumLastSegmentLengthOrthogonal,
    routeSelectedEdgesDownwards,
    // orthogonal
    edgeLabelPlacementOrthogonal,
    nodeLabelPlacementOrthogonal,
    edgeOrientationOrthogonal,
    alongEdgeOrthogonal,
    sideOfSideOrthogonal,

  } = useOrthogonalSideBarStore();
  const { 
    partitioningPolicy, 
    useDrawingAsSketch,
    enableEdgeBundling,
    bundlingStrength,
    edgeRoutingStyleCircular,

    edgeLabelPlacementCircular,
    nodeLabelPlacementCircular,
    edgeOrientationCircular,
    alongEdgeCircular,
    sideOfSideCircular,
  } = useCircularSideBarStore();
  const {
    orientation: treeOrientation,
    edgeLabelPlacementTree,
    nodeLabelPlacementTree,
    edgeOrientationTreeTree,
    alongEdgeTree,
    sideOfSideTree,
  } = useTreeSideBarStore();

  const layoutConfig = {
    // Hierarchical nodes
    nodeDistance: nodeToNode,
    nodeToEdgeDistance: nodeToEdge,
    edgeDistance: edgeToEdge,
    minimumLayerDistance: layerToLayer,
    stopDuration: duration,
    layoutOrientation: hierarchicalOrientation,
    // Hierarchical edges
    edgeRoutingStyle,
    backloopRouting,
    automaticEdgeGrouping,
    automaticBusRouting,
    highlightCriticalPath,
    minimumFirstSegmentLength,
    minimumLastSegmentLength,
    minimumEdgeLength,
    minimumEdgeDistance,
    minimumSlope,
    arrowsDefineEdgeDirection,
    considerEdgeThickness,
    recursiveEdgeRoutingStyle,
    uTurnSymmetry,
    allowShortcuts,
    // Hierarchical labels 
    edgeLabelPlacementHierarchical,
    nodeLabelPlacementHierarchical,
    edgeOrientation,
    alongEdge,
    sideOfSide,
    
    // Organic
    preferredEdgeLength,
    minimumNodeDistance,
    avoidNodeEdgeOverlap,
    compactness: compactness / 100,
    organicOrientation,
    clustering,

    edgeLabelPlacementOrganic,
    nodeLabelPlacementOrganic,
    edgeOrientationOrganic,
    alongEdgeOrganic,
    sideOfSideOrganic,

    // Orthogonal general
    gridSpacing,
    layoutMode,
    // Orthogonal edges
    minimumFirstSegmentLengthOrthogonal,
    minimumSegmentLength,
    minimumLastSegmentLengthOrthogonal,
    routeSelectedEdgesDownwards,
    // orthogonal labels
    edgeLabelPlacementOrthogonal,
    nodeLabelPlacementOrthogonal,
    edgeOrientationOrthogonal,
    alongEdgeOrthogonal,
    sideOfSideOrthogonal,

    // Circular
    partitioningPolicy,
    fromSketchMode: useDrawingAsSketch,
    // circular edges
    enableEdgeBundling,
    bundlingStrength,
    edgeRoutingStyleCircular,
    // circular label
    edgeLabelPlacementCircular,
    nodeLabelPlacementCircular,
    edgeOrientationCircular,
    alongEdgeCircular,
    sideOfSideCircular,
    // Tree
    treeOrientation,
    // Tree Label
    edgeLabelPlacementTree,
    nodeLabelPlacementTree,
    edgeOrientationTreeTree,
    alongEdgeTree,
    sideOfSideTree,
  };



  useLayoutEffect(() => {
    if (!graphComponentContainer.current) return;

    if (!graphComponentRef.current) {
      License.value = licenseData;
      const gc = new GraphComponent();
      const inputMode = new GraphViewerInputMode();
      gc.inputMode = inputMode;
      gc.minimumZoom = 0.3;
      gc.maximumZoom = 3.0;

      graphComponentRef.current = gc;
      graphComponentContainer.current.appendChild(gc.htmlElement);

      LayoutExecutor.ensure();
      initializeToolTips(inputMode);
    }

    const graphComponent = graphComponentRef.current!;
    
    createSampleGraph(graphComponent.graph, layout, layoutConfig, networkData);

    graphComponent.graph.nodes.forEach((node) => {
      const { label, labelText, labelParameter } = node.tag || {};
      if (showLabels && !label) {
        const newLabel = graphComponent.graph.addLabel({
          owner: node,
          text: labelText,
          layoutParameter: labelParameter,
        });
        node.tag.label = newLabel;
      } else if (!showLabels && label) {
        graphComponent.graph.remove(label);
        node.tag.label = null;
      }
    });

    graphComponent.fitGraphBounds();
    graphComponent.invalidate();
    
    return () => {
      if (graphComponentRef.current && graphComponentContainer.current) {
        graphComponentContainer.current.removeChild(graphComponentRef.current.htmlElement);
        graphComponentRef.current = null;
      }
    };
  }, [
    showLabels,
    layout,
    duration,
    edgeToEdge,
    nodeToNode,
    nodeToEdge,
    layerToLayer,
    hierarchicalOrientation,
    edgeRoutingStyle,
    backloopRouting,
    automaticEdgeGrouping,
    automaticBusRouting,
    highlightCriticalPath,
    minimumFirstSegmentLength,
    minimumLastSegmentLength,
    minimumEdgeLength,
    minimumEdgeDistance,
    minimumSlope,
    arrowsDefineEdgeDirection,
    considerEdgeThickness,
    recursiveEdgeRoutingStyle,
    uTurnSymmetry,
    allowShortcuts,
    edgeLabelPlacementHierarchical,
    nodeLabelPlacementHierarchical,
    edgeOrientation,
    alongEdge,
    sideOfSide,
    // organic placements
    edgeLabelPlacementOrganic,
    nodeLabelPlacementOrganic,
    edgeOrientationOrganic,
    alongEdgeOrganic,
    sideOfSideOrganic,

    // orthogonal labels
    edgeLabelPlacementOrthogonal,
    nodeLabelPlacementOrthogonal,
    edgeOrientationOrthogonal,
    alongEdgeOrthogonal,
    sideOfSideOrthogonal,

    // circular lables
    edgeLabelPlacementCircular,
    nodeLabelPlacementCircular,
    edgeOrientationCircular,
    alongEdgeCircular,
    sideOfSideCircular,

    // Tree Label
    edgeLabelPlacementTree,
    nodeLabelPlacementTree,
    edgeOrientationTreeTree,
    alongEdgeTree,
    sideOfSideTree,

    edgeOrientation,
    alongEdge,
    sideOfSide,
    preferredEdgeLength,
    minimumNodeDistance,
    avoidNodeEdgeOverlap,
    compactness,
    organicOrientation,
    clustering,
    gridSpacing,
    layoutMode,
    minimumFirstSegmentLengthOrthogonal,
    minimumSegmentLength,
    minimumLastSegmentLengthOrthogonal,
    routeSelectedEdgesDownwards,
    partitioningPolicy,
    useDrawingAsSketch,
    enableEdgeBundling,
    bundlingStrength,
    edgeRoutingStyleCircular,
    treeOrientation,
    networkData,
  ]);

  return (
    <div className="px-2 pt-2 pb-2">
      <div className="graph-component-container" ref={graphComponentContainer} />
      <div className="absolute bottom-4 left-4">
        <Inventory />
      </div>
    </div>
  );
}