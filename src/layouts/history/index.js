import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

import * as React from 'react';

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiPagination from 'components/VuiPagination'

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

import historyData from "layouts/history/data/historyData";

import SimmmpleLogo from "examples/Icons/SimmmpleLogo";

function History() {
  const { columns: prCols, rows: prRows } = historyData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox
      display="flex"
      flexDirection={{ xs: "row", lg: "row" }}
      justifyContent="flex-start"
      py={2}
      >
        <VuiBox item xs={12} sx={{ textAlign: "center" }}>
          <SimmmpleLogo size="62px" />
        </VuiBox>
        <VuiBox flexDirection='column'>
          <VuiTypography
            variant="h5"
            color="white"
            pl={3}
            pt={1}
          >
            {"Wallet"}
          </VuiTypography>
          <VuiTypography 
            variant='subtitle2'
            color='text'
            pl={3}
          >
            {"Ethereum Mainnet"}
          </VuiTypography>
        </VuiBox>
      </VuiBox>

      <VuiBox py={3}>
        <Card>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center">
            <VuiTypography variant="lg" color="white">
              History
            </VuiTypography>
          </VuiBox>
          <VuiBox
            sx={{
              "& th": {
                borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                  `${borderWidth[1]} solid ${grey[700]}`,
              },
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </VuiBox>
          <VuiBox pt={2} display='flex' justifyContent='center'>
            <VuiPagination size="small">
              <VuiPagination item>
                <Icon>keyboard_arrow_left</Icon>
              </VuiPagination>
              <VuiPagination item active>1</VuiPagination>
              <VuiPagination item>2</VuiPagination>
              <VuiPagination item>3</VuiPagination>
              <VuiPagination item>
                <Icon>keyboard_arrow_right</Icon>
              </VuiPagination>
            </VuiPagination>
          </VuiBox>
        </Card>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default History;
