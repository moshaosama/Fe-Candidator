const useSetActive = () => {
  const handleClick = (el: React.MouseEvent<HTMLDivElement>) => {
    document.querySelectorAll(".Active").forEach((el) => {
      el.classList.remove("Active");
    });

    el.currentTarget.classList.add("Active");
  };

  return { handleClick };
};

export default useSetActive;
