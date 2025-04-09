import { CircularLayoutEdgeRoutingPolicy, CircularLayoutPartitioningPolicy, HierarchicalLayoutRoutingStyle, LabelAlongEdgePlacements, LabelAngleReferences, LabelEdgeSides, LayoutOrientation, OrganicLayoutClusteringPolicy, RecursiveEdgePolicy } from "@yfiles/yfiles"
import { LabelPlacementOrientation } from "../types/types";

export function mapAlongEdge(along: string): LabelAlongEdgePlacements {
  
  switch (along) {
    case 'Anywhere':
      return LabelAlongEdgePlacements.ANYWHERE; 
    case 'At Source':
      return LabelAlongEdgePlacements.AT_SOURCE;
    case 'At Target':
      return LabelAlongEdgePlacements.AT_TARGET;
    case 'Centered':
      return LabelAlongEdgePlacements.AT_CENTER;
    case 'At Source Port':
      return LabelAlongEdgePlacements.AT_SOURCE_PORT;
    case 'At Target Port':
        return LabelAlongEdgePlacements.AT_TARGET_PORT;
    case '':
    case undefined:
    case null:
      console.warn('Invalid alongEdge value, defaulting to ANYWHERE:', along);
      return LabelAlongEdgePlacements.ANYWHERE;
    default:
      console.warn('Unknown alongEdge value, defaulting to ANYWHERE:', along);
      return LabelAlongEdgePlacements.AT_TARGET;
  }
}

export function mapEdgeSide(side: string): LabelEdgeSides {
  switch (side) {
    case 'On Edge':
      return LabelEdgeSides.ON_EDGE; 
    case 'Left':
      return LabelEdgeSides.LEFT_OF_EDGE; 
    case 'Right':
      return LabelEdgeSides.RIGHT_OF_EDGE; 
    case 'Anywhere':
      return LabelEdgeSides.ANYWHERE;
    case 'Left or Right':
      return LabelEdgeSides.LEFT_OF_EDGE | LabelEdgeSides.RIGHT_OF_EDGE; 
    case '':
    case undefined:
    case null:
      console.warn('Invalid sideOfSide value, defaulting to ON_EDGE:', side);
      return LabelEdgeSides.ON_EDGE;
    default:
      console.warn('Unknown sideOfSide value, defaulting to ON_EDGE:', side);
      return LabelEdgeSides.ON_EDGE;
  }
}
  
  export function mapOrientationToLayoutOrientation(orientation: string): LayoutOrientation {
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
  
  export function mapClusteringPolicy(policy: string): OrganicLayoutClusteringPolicy {
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
  
  export function mapPartitioningPolicy(policy: string): CircularLayoutPartitioningPolicy {
    switch (policy) {
      case 'BCC Compact':
        return CircularLayoutPartitioningPolicy.BCC_COMPACT;
      case 'BCC Isolated':
        return CircularLayoutPartitioningPolicy.BCC_ISOLATED;
      case 'Single Cycle':
        return CircularLayoutPartitioningPolicy.SINGLE_CYCLE;
      default:
        return CircularLayoutPartitioningPolicy.BCC_COMPACT;
    }
  }
  
  export function mapEdgeRoutingStyle(style: HierarchicalLayoutRoutingStyle | string | undefined): HierarchicalLayoutRoutingStyle {
    if (typeof style !== 'string') {
      return style ?? HierarchicalLayoutRoutingStyle.ORTHOGONAL; 
    }
    switch (style) {
      case 'Orthogonal':
        return HierarchicalLayoutRoutingStyle.ORTHOGONAL;
      case 'Octilinear':
        return HierarchicalLayoutRoutingStyle.OCTILINEAR;
      case 'Polyline':
        return HierarchicalLayoutRoutingStyle.POLYLINE;
      case 'Curved':
        return HierarchicalLayoutRoutingStyle.CURVED;
      default:
        return HierarchicalLayoutRoutingStyle.ORTHOGONAL;
    }
  }
  
  export function mapRecursiveEdgePolicy(policy: RecursiveEdgePolicy | string | undefined): RecursiveEdgePolicy {
    if (typeof policy !== 'string') {
      return policy ?? RecursiveEdgePolicy.UNDIRECTED;
    }
    switch (policy) {
      case 'Off':
        return RecursiveEdgePolicy.UNDIRECTED;
      case 'Directed':
        return RecursiveEdgePolicy.DIRECTED;
      case 'Undirected':
        return RecursiveEdgePolicy.UNDIRECTED;
      default:
        return RecursiveEdgePolicy.UNDIRECTED;
    }
  }
  
  export function mapCircularEdgeRoutingPolicy(style: string): CircularLayoutEdgeRoutingPolicy {
    switch (style) {
      case 'Inside':
        return CircularLayoutEdgeRoutingPolicy.INTERIOR;
      case 'Outside':
        return CircularLayoutEdgeRoutingPolicy.EXTERIOR;
      case 'Automatic':
        return CircularLayoutEdgeRoutingPolicy.AUTOMATIC;
      default:
        return CircularLayoutEdgeRoutingPolicy.$_enum; 
    }
  }

  export function mapLabelOrientationToAngleReference(
    orientation: any
  ): LabelAngleReferences {
    switch (orientation) {
      case 'Parallel':
        return LabelAngleReferences.RELATIVE_TO_EDGE_FLOW;
      case 'Orthogonal':
        return LabelAngleReferences.RELATIVE_TO_EDGE_FLOW;
      case 'Horizontal':
        return LabelAngleReferences.ABSOLUTE;
      case 'Vertical':
        return LabelAngleReferences.ABSOLUTE;
      default:
        return LabelAngleReferences.RELATIVE_TO_EDGE_FLOW;
    }
  }