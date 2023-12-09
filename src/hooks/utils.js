import { useState } from "react";

export { useSelectedGroup, useSelect };

function useSelectedGroup() {
  const [selected, setSelected] = useState(null);
  const group = new SelectedGroup({ selected, setSelected });
  return group;
}

function useSelect(key, group) {
  const [selected, setSelected] = useState(false);
  const select = () => {
    group.group.forEach((v, k) => {
      if (key === k) {
        setSelected(true);
        group.setSelected(key);
      } else {
        v.unselect();
      }
    });
  };
  const unselect = () => {
    setSelected(false);
  }
  const selectedState = { selected, select, unselect };
  group.push(key, selectedState);
  return selectedState;
}

class SelectedGroup {
  constructor({ selected, setSelected }) {
    this.group = new Map();
    this.selected = selected;
    this.setSelected = setSelected;
  }
  push(key, selectedState) {
    this.group.set(key, selectedState);
  }
  select(sKey) {
    for (let {value, key} of this.group) {
      if (sKey === key) {
        value.select();
      }
    }
  }
  selectFirst() {
    for (let {value, key} of this.group) {
      value.select();
      break;
    }
  }
}
