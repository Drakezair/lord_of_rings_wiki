/* eslint-disable react/display-name */
import { Suspense } from "react";

export default function withSuspense(
  Component: React.ComponentType<any>,
  loading: React.ReactNode = <div>Loading...</div>
) {
  return (props: any) => {
    return (
      <Suspense fallback={loading}>
        <Component {...props} />
      </Suspense>
    );
  };
}

/*
HOC Pattern
- Higher Order Component
- A function that takes a component and returns a new component
- The new component can pass props to the original component
- The new component can also render the original component

In this case, the WithSuspense HOC takes a component and a loading prop to handle skeleton loading
*/
