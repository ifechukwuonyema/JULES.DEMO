import Navbar from "@/components/layout/Navbar";
import QuickCapture from "@/components/ui/QuickCapture";
import AppLock from "@/components/ui/AppLock";
import Onboarding from "@/components/ui/Onboarding";

export const metadata = {
  title: "Allowee - Smart Student Finance",
  description: "Manage your student allowance with AI-powered budgeting and campus marketplace listings.",
  openGraph: {
    title: "Allowee - Smart Student Finance",
    description: "Manage your student allowance with AI-powered budgeting.",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <AppLock>
          <Onboarding />
          <Navbar />
          <main>{children}</main>
          <QuickCapture />
        </AppLock>
      </body>
    </html>
  );
}
