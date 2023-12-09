import Collection from "./Collection";
import { useSelect } from "../../hooks/utils";
import { memo } from "react";

const ModuleCollections = memo(({ module, selectedGroup }) => {
  const { selected, select, unselect } = useSelect(module.moduleId, selectedGroup);

  return (
    <div className="bg-charcoal hover:bg-glassy-green cursor-pointer">
      <div className={selected ? "bg-glassy-green" : ""}>
        <div className="flex flex-col p-[10px]" onClick={select}>
          <div className="self-center text-main-green text-lg font-semibold">
            {module.moduleName}
          </div>
          <div className={selected ? "visible h-fit" : "invisible max-h-[0px]"}>
            <div className="flex flex-col">
              {module.collections.map((collection) => (
                <div key={collection.collectionId}>
                  <Collection collection={collection} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ModuleCollections;
