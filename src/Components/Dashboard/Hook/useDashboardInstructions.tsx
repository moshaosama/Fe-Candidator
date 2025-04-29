import { useState } from "react";

enum ActiveSidebar {
  Active = "Active",
  UnActive = "UnActive",
}

const updateSidebarStyles = (
  sidebar: any,
  width: string,
  padding: string,
  justifyContent: string
) => {
  sidebar.style.setProperty("width", width);
  sidebar.style.setProperty("justify-content", justifyContent);
  sidebar.style.setProperty("padding-left", padding);
};

const useDashboardInstructions = () => {
  const [Active, setActive] = useState<ActiveSidebar>(ActiveSidebar.UnActive);
  const SidebarElement = document.getElementById("Sidebar");
  const SidebarLabels = document.querySelectorAll(".Label") as any;

  const handleClickActive = async () => {
    setActive(
      Active === ActiveSidebar.Active
        ? ActiveSidebar.UnActive
        : ActiveSidebar.Active
    );

    try {
      if (Active == ActiveSidebar.Active) {
        updateSidebarStyles(SidebarElement, "15pc", "10px", "start");
        SidebarLabels.style.setProperty("display", "flex");
      } else {
        updateSidebarStyles(SidebarElement, "5pc", "0px", "center");
      }
    } catch (err) {
      return err;
    }
  };

  return {
    Active,
    setActive,
    handleClickActive,
  };
};

export default useDashboardInstructions;
