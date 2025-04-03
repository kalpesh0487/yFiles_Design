import { GraphItemTypes, GraphViewerInputMode, IEdge, INode, Point } from "@yfiles/yfiles";
import tooltipImage from '../assets/Asset 11@2x (5).png'

export function initializeToolTips(graphInputMode: GraphViewerInputMode): void {
    const toolTipItems = GraphItemTypes.NODE | GraphItemTypes.EDGE;
  
    graphInputMode.toolTipItems = toolTipItems;
  
    graphInputMode.addEventListener('query-item-tool-tip', (evt) => {
      if (evt.item) {
        const item = evt.item as INode | IEdge;
        if (item instanceof IEdge && item.tag && item.tag.load !== undefined) {
          evt.toolTip = `<div class="tooltip">Load: ${item.tag.load}%</div>`;
        } else if (item instanceof INode && item.tag && item.tag.data) {
          const { label, ip } = item.tag.data;
          evt.toolTip = `<div class="tooltip">
            Name: ${label}<br>
            IP: ${ip}<br>
          </div>
          `;
        }
      }
    });

    // adding image to node if needed -: 
    // <img src="${tooltipImage}" alt="Node Icon" style="max-width: 500px; max-height: 500px;" /> 
  
    graphInputMode.toolTipInputMode.toolTipLocationOffset = new Point(2, 14);
    graphInputMode.toolTipInputMode.duration = '10s';
    graphInputMode.toolTipInputMode.delay = '0.3s';
}