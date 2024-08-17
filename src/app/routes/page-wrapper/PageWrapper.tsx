import { CommonLayout } from "@/shared/layouts";
import { ReactFCWithChildren } from "@/shared/types/app.types";
import { HeaderNavbar } from "@/widgets/header-navbar";
import { SidebarMenu } from "@/widgets/sidebar-menu";

export const PageWrapper: ReactFCWithChildren = ({ children }) => {
  return (
    <CommonLayout>
      <CommonLayout.Header>
        <HeaderNavbar />
      </CommonLayout.Header>
      <CommonLayout.Sidebar>
        <SidebarMenu />
      </CommonLayout.Sidebar>
      <CommonLayout.Content>{children}</CommonLayout.Content>
    </CommonLayout>
  );
};
