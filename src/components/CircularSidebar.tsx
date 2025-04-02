import useCircularSideBarStore from "../store/CircularSideBarStore";

const CircularSidebar = () => {
  const {
    isGeneralOpen,
    isEdgesOpen,
    isLabellingOpen,
    sample,
    preset,
    partitioningPolicy,
    actOnSelectionOnly,
    useDrawingAsSketch,
    enableEdgeBundling,
    bundlingStrength,
    edgeRoutingStyle,
    toggleGeneral,
    toggleEdges,
    toggleLabelling,
    setSample,
    setPreset,
    setPartitioningPolicy,
    toggleActOnSelectionOnly,
    toggleUseDrawingAsSketch,
    toggleEnableEdgeBundling,
    setBundlingStrength,
    setEdgeRoutingStyle,
  } = useCircularSideBarStore();

  return (
    <>
      <div className="flex items-center justify-between mb-2 w-full">
        <label className="text-sm text-black whitespace-nowrap flex items-center">Sample</label>
        <select
          value={sample}
          onChange={(e) => setSample(e.target.value)}
          className="w-55 p-0.5 border text-[15px] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Default</option>
          <option>Social Network</option>
          <option>Sub Structures</option>
          <option>Modified Structures</option>
        </select>
      </div>

      <div className="w-full h-[1px] bg-black mt-3"></div>

      <div className="flex items-center justify-between mt-2 w-full mb-2">
        <label className="text-sm text-black whitespace-nowrap flex items-center">Preset:</label>
        <select
          value={preset}
          onChange={(e) => setPreset(e.target.value)}
          className="w-55 p-0.5 text-[15px] border cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Default</option>
          <option>Single Cycle Bundled</option>
          <option>Sub Structures</option>
        </select>
      </div>

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
                <label className="text-sm text-black whitespace-nowrap flex items-center">Partitioning Policy</label>
                <select
                  value={partitioningPolicy}
                  onChange={(e) => setPartitioningPolicy(e.target.value)}
                  className="w-45 p-0.5 border text-[15px] cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>BCC Compact</option>
                  <option>BCC Isolated</option>
                  <option>Custom Groups</option>
                  <option>Single Cycle</option>
                </select>
              </div>

              <div className="mt-3">
                <div className="flex items-center mt-2 justify-between">
                  <label className="text-sm text-black">Act on Selection Only</label>
                  <input
                    type="checkbox"
                    checked={actOnSelectionOnly}
                    onChange={toggleActOnSelectionOnly}
                    className="h-4 w-4"
                  />
                </div>
                <div className="flex items-center my-2 justify-between">
                  <label className="text-sm text-black">Use Drawing as Sketch</label>
                  <input
                    type="checkbox"
                    checked={useDrawingAsSketch}
                    onChange={toggleUseDrawingAsSketch}
                    className="h-4 w-4"
                  />
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
                  <span className="text-sm ">Enable Edge Bundling:</span>
                  <input
                    type="checkbox"
                    checked={enableEdgeBundling}
                    onChange={toggleEnableEdgeBundling}
                    className="h-4 w-4"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm ">Bundling Strength:</span>
                  <div className="flex items-center justify-between">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={bundlingStrength}
                      onChange={(e) => setBundlingStrength(Number(e.target.value))}
                      className="w-full"
                    />
                    <span className="ml-3">{bundlingStrength.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm ">Edge Routing Style:</span>
                  <select
                    value={edgeRoutingStyle}
                    onChange={(e) => setEdgeRoutingStyle(e.target.value)}
                    className="p-1 border rounded"
                  >
                    <option>Inside</option>
                    <option>Outside</option>
                    <option>Automatic</option>
                    <option>Select Edge Outside</option>
                  </select>
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
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4" />
                  <label className="ml-2 text-sm ">Show Node Labels</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4" />
                  <label className="ml-2 text-sm ">Show Edge Labels</label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm ">Font Size:</span>
                  <input type="number" className="w-20 p-1 border rounded" defaultValue={12} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between my-2">
          <div className="border p-1 rounded-lg px-2 cursor-pointer">Preview</div>
          <div className="border p-1 rounded-lg px-2 bg-[#1E1E1E] cursor-pointer text-white">Save Settings</div>
        </div>
      </div>
    </>
  );
};

export default CircularSidebar;