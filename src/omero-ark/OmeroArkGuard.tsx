import React from "react";
import { useOmeroArk } from "./OmeroArkContext";

export const OmeroArkGuard: React.FC<{
  key?: string;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}> = ({ key, children, fallback }) => {
  const { client } = useOmeroArk();

  if (client) return <>{children}</>;

  return <>{fallback || `Not yet with OmeroArk`}</>;
};

export const lokNextGuarded = <T extends {}>(
  Child: React.ComponentType<T>,
  fallback?: React.ReactNode
) => {
  return (props: any) => (
    <OmeroArkGuard fallback={fallback}>
      <Child {...props} />
    </OmeroArkGuard>
  );
};
