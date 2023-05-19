import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingLines
      strokeColor="rgb(25, 118, 210)"
      strokeWidth="5"
      animationDuration="0.75"
      width="55"
      visible={true}
    />
  );
};
