import { useState } from 'react'
import { IoCube } from 'react-icons/io5'
import StakeCard from 'examples/Cards/InfoCards/StakeCard'
import VuiInput from 'components/VuiInput'
import AppBar from '@mui/material/AppBar'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import VuiBox from 'components/VuiBox'
import VuiTypography from 'components/VuiTypography'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Footer from 'examples/Footer'
import colors from 'assets/theme/base/colors'
import bnb from 'assets/coins/wbnb.svg'

import SimmmpleLogo from 'examples/Icons/SimmmpleLogo'

function Dashboard() {
  const [tabsOrientation, setTabsOrientation] = useState('horizontal')
  const [tabValue, setTabValue] = useState(0)

  const handleSetTabValue = (event, newValue) => setTabValue(newValue)

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox
      display='flex'
      flexDirection={{ xs: 'row', lg: 'row' }}
      justifyContent='flex-start'
      py={2}
      >
        <VuiBox item xs={12} sx={{ textAlign: 'center' }}>
          <SimmmpleLogo size='62px' />
        </VuiBox>
        <VuiBox flexDirection='column'>
          <VuiTypography
            variant='h5'
            color='white'
            pl={3}
            pt={1}
          >
            {'Wallet'}
          </VuiTypography>
          <VuiTypography 
            variant='subtitle2'
            color='text'
            pl={3}
          >
            {'Ethereum Mainnet'}
          </VuiTypography>
        </VuiBox>
      </VuiBox>

      <VuiBox
        py={3}
        //px={4}
        display='flex'
      flexDirection={{ xs: 'column', sm: 'row', lg: 'row' }}
      justifyContent='space-between' 
      >
        <VuiBox>
          <AppBar position='static'>
            <Tabs
              orientation={tabsOrientation}
              value={tabValue}
              onChange={handleSetTabValue}
              sx={{ background: 'transparent', display: 'flex', justifyContent: 'flex-end' }}
            >
              <Tab label='ACTIVE' icon={<IoCube color='white' size='16px' />} />
              <Tab label='INACTIVE' />
            </Tabs>
          </AppBar>
        </VuiBox>

        <VuiBox 
          //width={{xs: '130px', sm: '100px'}}
          pt={{xs: '25px', sm:'0px'}}
          display={{xs: 'flex'}}
          flexDirection={{xs: 'column'}}
          justifyContent={{xs: 'flex-end'}}
        >
          <VuiInput
            placeholder='Search Coins'
            icon={{ component: 'search', direction: 'left' }}
            sx={({ breakpoints }) => ({
              [breakpoints.down('sm')]: {
                maxWidth: '85px',
              },
              [breakpoints.only('sm')]: {
                maxWidth: '85px',
              },
              backgroundColor: 'info.main !important',
            })}
          />
        </VuiBox>
      </VuiBox>
      
      <VuiBox display='flex' flexWrap='wrap' justifyContent='space-around'>
        <VuiBox my={2} width='350px'>
          <StakeCard 
            coinSvg={bnb}
            coin='WBNB'
            coinApy='5,18'
            stakeValue1='2.43'
            stakeValue2='5.00'
            stakeProgressValue='47'
            stakeDays='30'
            stakeActive='Active'
            stakeFee='1.99'
            harvestActive='Active'
          />
        </VuiBox>

        <VuiBox my={2} width='350px'>
          <StakeCard
            coinSvg={bnb}
            coin='WBNB'
            coinApy='5,18'
            stakeValue1='7.43'
            stakeValue2='10.00'
            stakeProgressValue='47'
            stakeDays='60'
            stakeActive='Active'
            stakeFee='1.99'
            harvestActive='Not Active'
          />
        </VuiBox>

        <VuiBox my={2} width='350px'>
          <StakeCard
            coinSvg={bnb}
            coin='WBNB'
            coinApy='5,18'
            stakeValue1='136.00'
            stakeValue2='150.00'
            stakeDays='90'
            stakeActive='Not Active'
            stakeFee='1.99'
            harvestActive='Not Active'
          />
        </VuiBox>

        <VuiBox my={2} width='350px'>
          <StakeCard
            coinSvg={bnb}
            coin='WBNB'
            coinApy='5,18'
            stakeValue1='136.00'
            stakeValue2='150.00'
            stakeDays='90'
            stakeActive='Not Active'
            stakeFee='1.99'
            harvestActive='Not Active'
          />
        </VuiBox>

        <VuiBox my={2} width='350px'>
          <StakeCard
            coinSvg={bnb}
            coin='WBNB'
            coinApy='5,18'
            stakeValue1='136.00'
            stakeValue2='150.00'
            stakeDays='90'
            stakeActive='Not Active'
            stakeFee='1.99'
            harvestActive='Not Active'
          />
        </VuiBox>

        <VuiBox my={2} width='350px'>
          <StakeCard
            coinSvg={bnb}
            coin='WBNB'
            coinApy='5,18'
            stakeValue1='136.00'
            stakeValue2='150.00'
            stakeDays='90'
            stakeActive='Not Active'
            stakeFee='1.99'
            harvestActive='Not Active'
          />
        </VuiBox>

        <VuiBox my={2} width='350px'>
          <StakeCard
            coinSvg={bnb}
            coin='WBNB'
            coinApy='5,18'
            stakeValue1='136.00'
            stakeValue2='150.00'
            stakeDays='90'
            stakeActive='Not Active'
            stakeFee='1.99'
            harvestActive='Not Active'
          />
        </VuiBox>

        <VuiBox my={2} width='350px'>
          <StakeCard
            coinSvg={bnb}
            coin='WBNB'
            coinApy='5,18'
            stakeValue1='136.00'
            stakeValue2='150.00'
            stakeDays='90'
            stakeActive='Not Active'
            stakeFee='1.99'
            harvestActive='Not Active'
          />
        </VuiBox>
      </VuiBox>

      <Footer />

    </DashboardLayout>
  )
}

export default Dashboard