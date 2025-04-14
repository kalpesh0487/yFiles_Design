import useHierarchicalSideBarStore from '../store/hierarchicalSideBarStore';

const HierarchicalSidebar = () => {
  const {
    isGeneralOpen,
    isEdgesOpen,
    isLabellingOpen,
    duration,
    edgeToEdge,
    nodeToNode,
    nodeToEdge,
    layerToLayer,
    orientation,
    layoutComponentsSeparately,
    layoutSubComponentsSeparately,
    symmetricPlacement,
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
    toggleGeneral,
    toggleEdges,
    toggleLabelling,
    setDuration,
    setEdgeToEdge,
    setNodeToNode,
    setNodeToEdge,
    setLayerToLayer,
    setOrientation,
    toggleLayoutComponentsSeparately,
    toggleLayoutSubComponentsSeparately,
    toggleSymmetricPlacement,
    setEdgeRoutingStyle,
    toggleBackloopRouting,
    toggleAutomaticEdgeGrouping,
    toggleAutomaticBusRouting,
    toggleHighlightCriticalPath,
    setMinimumFirstSegmentLength,
    setMinimumLastSegmentLength,
    setMinimumEdgeLength,
    setMinimumEdgeDistance,
    setMinimumSlope,
    toggleArrowsDefineEdgeDirection,
    toggleConsiderEdgeThickness,
    setRecursiveEdgeRoutingStyle,
    setUTurnSymmetry,
    toggleAllowShortcuts,
    setEdgeLabelPlacementHierarchical,
    setNodeLabelPlacementHierarchical,
    setEdgeOrientation,
    setAlongEdge,
    setSideOfSide,
  } = useHierarchicalSideBarStore();


  return (
    <>
      <div className="flex items-center justify-between mb-2 w-full">
        <label className="text-sm text-black whitespace-nowrap flex items-center">Sample</label>
        <div
          className="w-55 px-2 text-[15px] border rounded-md bg-white"
        >
          Grouping
        </div>
      </div>

      <div className="w-full h-[1px] bg-black mt-3"></div>

      <div>
        <div className="border-b">
          <button onClick={toggleGeneral} className="w-full flex items-center py-1 text-md">
            <span className={`transform transition-transform text-xl font-bold ${isGeneralOpen ? 'rotate-90' : ''}`}>
              ›
            </span>
            <span className={`font-semibold ${isGeneralOpen ? 'ml-2' : 'ml-3'}`}>General</span>
          </button>

          {isGeneralOpen && (
            <div className="pb-4">
              <div className="flex items-center justify-between mb-2 w-full">
                <label className="text-sm text-black whitespace-nowrap flex items-center">Orientation</label>
                <select
                  value={orientation}
                  onChange={(e) => setOrientation(e.target.value)}
                  className="w-55 p-0.5 border text-[15px] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Top to Bottom</option>
                  <option>Left to Right</option>
                  <option>Bottom to Top</option>
                  <option>Right to Left</option>
                </select>
              </div>

              <div className="mt-3">
                <div className="flex items-center mt-2 justify-between">
                  <label className="text-sm text-black">Layout Components Separately</label>
                  <input
                    type="checkbox"
                    checked={layoutComponentsSeparately}
                    onChange={toggleLayoutComponentsSeparately}
                    className="h-4 w-4"
                  />
                </div>
                <div className="flex items-center mt-2 justify-between">
                  <label className="text-sm text-black">Layout Sub-Components Separately</label>
                  <input
                    type="checkbox"
                    checked={layoutSubComponentsSeparately}
                    onChange={toggleLayoutSubComponentsSeparately}
                    className="h-4 w-4"
                  />
                </div>
                <div className="flex items-center my-2 justify-between">
                  <label className="text-sm text-black">Symmetric Placement</label>
                  <input
                    type="checkbox"
                    checked={symmetricPlacement}
                    onChange={toggleSymmetricPlacement}
                    className="h-4 w-4"
                  />
                </div>
              </div>

              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm text-black">Stop Duration (secs)</label>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="ml-3">{duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm text-black">Node to Node Distance</label>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={nodeToNode}
                    onChange={(e) => setNodeToNode(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="ml-3">{nodeToNode}</span>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm text-black">Node to Edge Distance</label>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={nodeToEdge}
                    onChange={(e) => setNodeToEdge(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="ml-3">{nodeToEdge}</span>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm text-black">Edge to Edge Distance</label>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={edgeToEdge}
                    onChange={(e) => setEdgeToEdge(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="ml-3">{edgeToEdge}</span>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm text-black">Layer to Layer Distance</label>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={layerToLayer}
                    onChange={(e) => setLayerToLayer(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="ml-3">{layerToLayer}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-b">
          <button onClick={toggleEdges} className="w-full flex items-center py-1 text-md">
            <span className={`transform transition-transform text-xl font-bold ${isEdgesOpen ? 'rotate-90' : ''}`}>
              ›
            </span>
            <span className={`font-semibold ${isEdgesOpen ? 'ml-2' : 'ml-3'}`}>Edges</span>
          </button>

          {isEdgesOpen && (
            <div className="pb-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm ">Edge Routing Style:</span>
                  <select
                    value={edgeRoutingStyle}
                    onChange={(e) => setEdgeRoutingStyle(e.target.value)}
                    className="p-1 border rounded"
                  >
                    <option>Orthogonal</option>
                    <option>Octilinear</option>
                    <option>Polyline</option>
                    <option>Curved</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm ">Backloop Routing:</span>
                  <input
                    type="checkbox"
                    checked={backloopRouting}
                    onChange={toggleBackloopRouting}
                    className="h-4 w-4"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm ">Automatic Edge Grouping:</span>
                  <input
                    type="checkbox"
                    checked={automaticEdgeGrouping}
                    onChange={toggleAutomaticEdgeGrouping}
                    className="h-4 w-4"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm ">Automatic Bus Routing:</span>
                  <input
                    type="checkbox"
                    checked={automaticBusRouting}
                    onChange={toggleAutomaticBusRouting}
                    className="h-4 w-4"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm ">Highlight Critical Path:</span>
                  <input
                    type="checkbox"
                    checked={highlightCriticalPath}
                    onChange={toggleHighlightCriticalPath}
                    className="h-4 w-4"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm ">Minimum First Segment Length:</span>
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={minimumFirstSegmentLength}
                      onChange={(e) => setMinimumFirstSegmentLength(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-3">{minimumFirstSegmentLength}</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm ">Minimum Last Segment Length:</span>
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={minimumLastSegmentLength}
                      onChange={(e) => setMinimumLastSegmentLength(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-3">{minimumLastSegmentLength}</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm ">Minimum Edge Length:</span>
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={minimumEdgeLength}
                      onChange={(e) => setMinimumEdgeLength(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-3">{minimumEdgeLength}</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm ">Minimum Edge Distance:</span>
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={minimumEdgeDistance}
                      onChange={(e) => setMinimumEdgeDistance(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-3">{minimumEdgeDistance}</span>
                  </div>
                </div>

                <div className="flex flex-col pointer-events-none text-gray-500">
                  <span className="text-sm">Minimum Slope:</span>
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={minimumSlope}
                      onChange={(e) => setMinimumSlope(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-3">{minimumSlope}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm ">Arrows Define Edge Direction:</span>
                  <input
                    type="checkbox"
                    checked={arrowsDefineEdgeDirection}
                    onChange={toggleArrowsDefineEdgeDirection}
                    className="h-4 w-4"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm ">Consider Edge Thickness:</span>
                  <input
                    type="checkbox"
                    checked={considerEdgeThickness}
                    onChange={toggleConsiderEdgeThickness}
                    className="h-4 w-4"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm ">Recursive Edge Routing Style:</span>
                  <select
                    value={recursiveEdgeRoutingStyle}
                    onChange={(e) => setRecursiveEdgeRoutingStyle(e.target.value)}
                    className="p-1 border rounded"
                  >
                    <option>Off</option>
                    <option>Directed</option>
                    <option>Undirected</option>
                  </select>
                </div>

                <div className="flex flex-col pointer-events-none text-gray-600">
                  <span className="text-sm ">U-turn Symmetry:</span>
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={uTurnSymmetry}
                      onChange={(e) => setUTurnSymmetry(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-3">{uTurnSymmetry}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pointer-events-none text-gray-600">
                  <span className="text-sm ">Allow Shortcuts:</span>
                  <input
                    type="checkbox"
                    checked={allowShortcuts}
                    onChange={toggleAllowShortcuts}
                    className="h-4 w-4"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-b">
          <button onClick={toggleLabelling} className="w-full flex items-center py-1 text-md">
            <span className={`transform transition-transform text-xl font-bold ${isLabellingOpen ? 'rotate-90' : ''}`}>
              ›
            </span>
            <span className={`font-semibold ${isLabellingOpen ? 'ml-2' : 'ml-3'}`}>Labelling</span>
          </button>

          {isLabellingOpen && (
            <div className="pb-4">
              <div className="space-y-3">
                <div className='flex items-center justify-between '>
                  <span className='text-sm'>Node Labelling</span>
                  <select
                    value={nodeLabelPlacementHierarchical}
                    onChange={(e) => setNodeLabelPlacementHierarchical(e.target.value)}
                    className='p-1 border rounded w-30'
                  >
                    <option>Consider</option>
                    <option>Generic</option>
                    <option>Ignore</option>
                  </select>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Edge Labelling</span>
                  <select
                    value={edgeLabelPlacementHierarchical}
                    onChange={(e) => setEdgeLabelPlacementHierarchical(e.target.value)}
                    className='p-1 border rounded w-30'
                  >
                    <option>Ignore</option>
                    <option>Integrated</option>
                    <option>Generic</option>
                  </select>
                </div>

                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Orientation</span>
                  <select
                    value={edgeOrientation}
                    onChange={(e) => setEdgeOrientation(e.target.value)}
                    className='p-1 border rounded w-30'
                  >
                    <option>Parallel</option>
                    <option>Orthogonal</option>
                    <option>Horizontal</option>
                    <option>Vertical</option>
                  </select>
                </div>

                <div className='flex items-center justify-between'>
                  <span className='text-sm'>Along Edge</span>
                  <select
                    value={alongEdge}
                    onChange={(e) => setAlongEdge(e.target.value)}
                    className='p-1 border rounded w-30'
                  >
                    <option>Anywhere</option>
                    <option>At Source</option>
                    <option>At Source Port</option>
                    <option>At Target</option>
                    <option>At Target Port</option>
                    <option>Centered</option>
                  </select>
                </div>

                <div className='flex items-cente justify-between'>
                  <span className='text-sm'>Side of Edge</span>
                  <select
                    value={sideOfSide}
                    onChange={(e) => setSideOfSide(e.target.value)}
                    className='p-1 border rounded w-30'
                  >
                    <option>Anywhere</option>
                    <option>On Edge</option>
                    <option>Left</option>
                    <option>Right</option>
                    <option>Left or Right</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        
      </div>
    </>
  );
};

export default HierarchicalSidebar;