import { ThreeDots } from 'react-loader-spinner';
import { Box } from './Loader.styled';

export const Loader = () => {
  return (
    <Box className="wrapper">
      <ThreeDots
        color="#e3bd4f"
        height="150"
        width="150"
        radius="9"
        ariaLabel="loading"
        visible={true}
      />
    </Box>
  );
};
