import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import DaysIcon from '@mui/icons-material/AccessTimeFilled';

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import VuiButton from "components/VuiButton";
import VuiBadge from "components/VuiBadge";

import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

function StakeCard({ coinSvg, coin, coinApy, stakeValue1, stakeValue2, stakeDays, stakeActive, stakeFee, harvestActive }) {
  const labels = [];
  const values = [];
  const { size } = typography;

  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <VuiBox display='flex' justifyContent='space-between'>
        <VuiBox
          component="img"
          src={coinSvg}
          width={50}
        />
        <VuiBox pr={2}>
          <VuiBox>
            <VuiTypography variant="h5" textGradient color='light' fontWeight='bold' textTransform="capitalize">
              Earn {coin}
            </VuiTypography>
          </VuiBox>

          <VuiBox>
            <VuiTypography variant="xl" color="warning" textTransform="capitalize">
              {`APY: ${coinApy}`}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display='flex' flexDirection='column' alignItems='flex-end' justifyContent='flex-start'>
          <VuiTypography pb={1} fontWeight='light' variant='caption' color='info'>
            {stakeDays} Days 
          </VuiTypography>
          <DaysIcon fontSize='small' color='info' /> 
        </VuiBox>
      </VuiBox>

      <VuiTypography pt={2} variant="body2" color="white">
          Total Stake: <br />
        </VuiTypography>

      <VuiBox pb={2} display='flex' justifyContent="flex-end">
        <VuiTypography color='white' pr={1}>
          {stakeValue1} /
        </VuiTypography>
        <VuiTypography color='info'>
          {stakeValue2}
        </VuiTypography>
      </VuiBox>

      <VuiProgress value={(stakeValue1 / stakeValue2) * 100} />

      <VuiBox pt={2} display='flex' justifyContent='center'>
        <VuiButton size='large' fullWidth variant='gradient' color="info">UNLOCK WALLET</VuiButton>
      </VuiBox>

      <VuiBox display='flex' justifyContent='space-between' pt={2}>
        <VuiBox display='flex' flexDirection='column' alignItems='center'>
          <VuiTypography pb={0} textGradient color='info' variant='body2'>
            Earned {coin}
          </VuiTypography>

          <VuiBadge badgeContent={stakeActive} variant='contained' color={stakeActive === 'Not Active' ? 'error' : 'success'} size='sm' container /> 
        </VuiBox>

        <VuiBox display='flex'>
          <VuiButton size='small' fullWidth variant={harvestActive === 'Not Active' ? 'outlined' : 'gradient'} color='info'>Harvest</VuiButton>
        </VuiBox>
      </VuiBox>
      
      <VuiBox pt={2} display='flex' alignItems='center' justifyContent='center'>
        <VuiTypography variant='caption' color='white' fontWeight='light'>
          {stakeFee}% unstaking fee if withdrawn within {stakeDays}d
        </VuiTypography>
      </VuiBox>

    </Card>
  );
}

StakeCard.propTypes = {
  coin: PropTypes.string.isRequired,
};

export default StakeCard;
