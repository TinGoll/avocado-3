import { CubicPage, setCubicPage } from "@/features/cubic/CubicMenu";
import { FC, useEffect } from "react";

export const CubicHome: FC = () => {
  useEffect(() => setCubicPage(CubicPage.SUPPLIERS), []);
  return <div>CubicPage</div>;
};
