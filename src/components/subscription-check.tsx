import { redirect } from "next/navigation";
import { checkUserSubscription } from "@/app/actions";
import { requireAuth } from "@/app/middleware-alternative";

interface SubscriptionCheckProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export async function SubscriptionCheck({
  children,
  redirectTo = "/pricing",
}: SubscriptionCheckProps) {
  const session = await requireAuth();
  const user = session.user;

  const isSubscribed = await checkUserSubscription(user?.id!);

  if (!isSubscribed) {
    redirect(redirectTo);
  }

  return <>{children}</>;
}
