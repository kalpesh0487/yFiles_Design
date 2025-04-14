import useSideBarStore from '../store/sideBarStore';
import HierarchicalSidebar from './HierarchicalSidebar';

const SideBar = () => {
  const {
    isCollapsed,
    layout,
    toggleCollapse,
    setLayout,
  } = useSideBarStore();

  return (
    <div
      className={`absolute right-3 top-0 rounded-md my-3 h-[99vh] overflow-scroll border bg-white border-l-2 shadow-lg p-4 pt-4 transition-all duration-300 ${
        isCollapsed ? 'w-[40px] overflow-hidden' : 'w-85'
      }`}
    >
      <div
        className={`absolute hover:scale-115 transition-all ${isCollapsed ? `z-40 left-[7px]` : `left-[15px]`} top-7.5 transform -translate-y-1/2 bg-slate-200 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer border font-semibold border-black shadow-lg`}
        onClick={toggleCollapse}
      >
        {isCollapsed ? '<' : '>'}
      </div>

      {!isCollapsed && (
        <>
          <div className="flex">
            <h2 className="text-xl text-black mb-1 ml-10">TOPOLOGY SETTINGS</h2>
          </div>

          

         <HierarchicalSidebar />
        </>
      )}

      <div>
        <div
          className={`absolute ${isCollapsed ? `z-40 left-[7px]` : `left-[-30px]`} bottom-10 transform -translate-y-1/2 bg-slate-200 w-6 h-6 flex rounded-sm items-center justify-center cursor-pointer border font-semibold border-black`}
        >
          +
        </div>
        <div
          className={`absolute ${isCollapsed ? `z-40 left-[7px]` : `left-[-30px]`} bottom-3 transform -translate-y-1/2 bg-slate-200 w-6 h-6 flex items-center rounded-sm justify-center cursor-pointer border font-semibold border-black`}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default SideBar;