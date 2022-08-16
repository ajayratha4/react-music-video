import { Box, Skeleton } from "@mui/material";
import React from "react";
type Props = {
  dummyArr: number[];
  height?: number;
  width?: number;
};

const HorizontalSkeleton = ({
  dummyArr = Array.from(Array(1).keys()),
  width = 230,
  height = 150,
}: Props) => {
  return (
    <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
      {dummyArr?.map((item) => (
        <Box key={item}>
          <Skeleton variant="rectangular" width={width} height={height} />
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalSkeleton;
