import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    0: "#a7f3d0",
    "1.0": "#6ee7b7",
  },
  shadowBlur: 5,
});

export function TopLoader() {
  return (
    <>
      <TopBarProgress />
    </>
  );
}
