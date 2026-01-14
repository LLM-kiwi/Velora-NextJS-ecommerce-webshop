import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token");

    // Skip protection if we are on the login page
    // Note: This layout is for /admin. If we want /admin/login to be accessible,
    // we should handle it. Since login is at /admin/login, it will inherit this layout.

    return (
        <div className="admin-layout min-h-screen bg-background">
            {children}
        </div>
    );
}
