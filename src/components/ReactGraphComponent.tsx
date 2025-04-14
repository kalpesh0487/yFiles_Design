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

import Inventory from './Inventory';
import { useNetworkStore } from '../store/dataStore';
import useSideBarStore from '../store/sideBarStore';
import { useDeviceSelectionStore } from '../store/deviceSelectionStore';
import { DeviceType } from '../types/types';

export function ReactGraphComponent() {
  const graphComponentContainer = useRef<HTMLDivElement>(null);
  const graphComponentRef = useRef<GraphComponent | null>(null);
  const [showLabels, setShowLabels] = useState(false);

  const { layout } = useSideBarStore();
  const networkData = useNetworkStore((state) => state.networkData);
  const { selectedDevices } = useDeviceSelectionStore();
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
    sampleHierarchical,
    // edges
    edgeLabelPlacementHierarchical,
    nodeLabelPlacementHierarchical,
    edgeOrientation,
    alongEdge,
    sideOfSide,
  } = useHierarchicalSideBarStore();
  

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
    sampleHierarchical,
    // Hierarchical labels 
    edgeLabelPlacementHierarchical,
    nodeLabelPlacementHierarchical,
    edgeOrientation,
    alongEdge,
    sideOfSide,
    
  };

  const filteredNodes = [
    ...networkData.nodes.filter((node) =>
      node.type === DeviceType.BACKHAUL ||
      node.type === DeviceType.INTERNET ||
      node.type === DeviceType.WAN
    ),
    ...networkData.nodes.filter((node) =>
      (node.type === DeviceType.SWITCH || node.type === DeviceType.FAT_SWITCH || node.type === DeviceType.UNKNOWN) && selectedDevices[DeviceType.SWITCH] ||
      node.type === DeviceType.ROUTER && selectedDevices[DeviceType.ROUTER] ||
      node.type === DeviceType.FIREWALL && selectedDevices[DeviceType.FIREWALL] ||
      node.type === DeviceType.LOAD_BALANCER && selectedDevices[DeviceType.LOAD_BALANCER]
    ),
  ];

  const filteredGroups = networkData.groups.filter((group) =>
    group.nodeIds.some((nodeId) => filteredNodes.some((node) => node.id === nodeId))
  );

  const filteredConnections = networkData.connections.filter(
    (conn) =>
      filteredNodes.some((node) => node.id === conn.source) ||
      filteredGroups.some((group) => group.id === conn.target)
  );


  const filteredNetworkData = {
    nodes: filteredNodes,
    connections: filteredConnections,
    groups: filteredGroups,
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
    console.log("filter ya nhiiiiiiiiiiiiiiiiiiiiiii",filteredNetworkData);
    createSampleGraph(graphComponent.graph, layout, layoutConfig, filteredNetworkData);

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
    sampleHierarchical,
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

    edgeOrientation,
    alongEdge,
    sideOfSide,
    
    networkData,
    selectedDevices
  ]);

  return (
    <div className="px-2 pt-2 pb-2">
      <div className="graph-component-container " ref={graphComponentContainer} />
      <div className="absolute bottom-4 left-4">
        <Inventory />
      </div>
    </div>
  );
}