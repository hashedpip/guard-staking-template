import Icon from "@mui/material/Icon";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </VuiTypography>
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

const action = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "transaction", align: "left" },
    { name: "amount", align: "left" },
    { name: "type", align: "left" },
    { name: "account", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      transaction: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Token A
          </VuiTypography>
        </VuiBox>
      ),
      amount: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $3,000
        </VuiTypography>
      ),
      type: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Stake
        </VuiTypography>
      ),
      account: <Completion value={100} color="info" />,
      action,
    },
    {
      transaction: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
          Token A
          </VuiTypography>
        </VuiBox>
      ),
      amount: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $7,000
        </VuiTypography>
      ),
      type: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Unstake
        </VuiTypography>
      ),
      account: <Completion value={30} color="info" />,
      action,
    },
    {
      transaction: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
          Token A
          </VuiTypography>
        </VuiBox>
      ),
      amount: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $32,000
        </VuiTypography>
      ),
      type: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Unstake
        </VuiTypography>
      ),
      account: <Completion value={0} color="info" />,
      action,
    },
    {
      transaction: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Token B
          </VuiTypography>
        </VuiBox>
      ),
      amount: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $2,300
        </VuiTypography>
      ),
      type: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Withdraw
        </VuiTypography>
      ),
      account: <Completion value={100} color="info" />,
      action,
    },
    {
      transaction: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Token B
          </VuiTypography>
        </VuiBox>
      ),
      amount: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $2,300
        </VuiTypography>
      ),
      type: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Withdraw
        </VuiTypography>
      ),
      account: <Completion value={100} color="info" />,
      action,
    },
    {
      transaction: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Token B
          </VuiTypography>
        </VuiBox>
      ),
      amount: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $2,300
        </VuiTypography>
      ),
      type: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Withdraw
        </VuiTypography>
      ),
      account: <Completion value={100} color="info" />,
      action,
    },
    {
      transaction: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Token B
          </VuiTypography>
        </VuiBox>
      ),
      amount: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $2,300
        </VuiTypography>
      ),
      type: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Withdraw
        </VuiTypography>
      ),
      account: <Completion value={100} color="info" />,
      action,
    },
    {
      transaction: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
          Token A
          </VuiTypography>
        </VuiBox>
      ),
      amount: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $32,000
        </VuiTypography>
      ),
      type: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Unstake
        </VuiTypography>
      ),
      account: <Completion value={0} color="info" />,
      action,
    },
  ],
};
