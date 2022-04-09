// This file is part of MinIO Console Server
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { Fragment, useEffect, useState } from "react";
import PageHeader from "../../Common/PageHeader/PageHeader";
import PageLayout from "../../Common/Layout/PageLayout";
import { Box, DialogContentText } from "@mui/material";
import useApi from "../../Common/Hooks/useApi";
import ReplicationSites from "./ReplicationSites";
import TrashIcon from "../../../../icons/TrashIcon";
import RBIconButton from "../../Buckets/BucketDetails/SummaryItems/RBIconButton";
import Loader from "../../Common/Loader/Loader";
import { AddIcon, ConfirmDeleteIcon, RecoverIcon } from "../../../../icons";
import AddReplicationSitesModal from "./AddReplicationSitesModal";
import { connect } from "react-redux";
import { setErrorSnackMessage, setSnackBarMessage } from "../../../../actions";
import { ErrorResponseHandler } from "../../../../common/types";
import HelpBox from "../../../../common/HelpBox";
import ConfirmDialog from "../../Common/ModalWrapper/ConfirmDialog";

export type ReplicationSite = {
  deploymentID: string;
  endpoint: string;
  name: string;
  isCurrent?: boolean;
};

const SiteReplication = ({
  setSnackBarMessage,
}: {
  setSnackBarMessage: (msg: string) => void;
}) => {
  const [sites, setSites] = useState([]);

  const [isAddOpen, setIsAddOpen] = useState(false);

  const [deleteAll, setIsDeleteAll] = useState(false);
  const [isSiteInfoLoading, invokeSiteInfoApi] = useApi(
    (res: any) => {
      const { sites: siteList, name: curSiteName } = res;
      // current site name to be the fist one.
      const foundIdx = siteList.findIndex((el: any) => el.name === curSiteName);
      if (foundIdx !== -1) {
        let curSite = siteList[foundIdx];
        curSite = {
          ...curSite,
          isCurrent: true,
        };
        siteList.splice(foundIdx, 1, curSite);
      }

      siteList.sort((x: any, y: any) => {
        return x.name === curSiteName ? -1 : y.name === curSiteName ? 1 : 0;
      });
      setSites(siteList);
    },
    (err: any) => {
      setSites([]);
    }
  );

  const getSites = () => {
    invokeSiteInfoApi("GET", `api/v1/admin/site-replication`);
  };

  const [isRemoving, invokeSiteRemoveApi] = useApi(
    (res: any) => {
      setIsDeleteAll(false);
      setSnackBarMessage(`Successfully deleted.`);
      getSites();
    },
    (err: ErrorResponseHandler) => {
      setErrorSnackMessage(err);
    }
  );

  const removeSites = (isAll: boolean = false, delSites: string[] = []) => {
    invokeSiteRemoveApi("DELETE", `api/v1/admin/site-replication`, {
      all: isAll,
      sites: delSites,
    });
  };

  useEffect(() => {
    getSites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasSites = sites?.length;

  return (
    <Fragment>
      <PageHeader label={"Site Replication"} />
      <PageLayout>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {hasSites ? (
            <Box>
              <RBIconButton
                tooltip={"Delete All"}
                text={"Delete All"}
                variant="outlined"
                color="secondary"
                disabled={isRemoving}
                icon={<TrashIcon />}
                onClick={() => {
                  setIsDeleteAll(true);
                }}
              />
            </Box>
          ) : null}
          <RBIconButton
            tooltip={"Add Replication Sites"}
            text={"Add Sites"}
            variant="contained"
            color="primary"
            disabled={isRemoving}
            icon={<AddIcon />}
            onClick={() => {
              setIsAddOpen(true);
            }}
          />
        </Box>
        {hasSites ? (
          <ReplicationSites
            sites={sites}
            onDeleteSite={removeSites}
            onRefresh={getSites}
          />
        ) : null}
        {isSiteInfoLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "calc( 100vh - 450px )",
            }}
          >
            <Loader style={{ width: 16, height: 16 }} />
          </Box>
        ) : null}
        {!hasSites && !isSiteInfoLoading ? (
          <Box
            sx={{
              padding: "30px",
              border: "1px solid #eaeaea",
              marginTop: "15px",
              marginBottom: "15px",
              height: "calc( 100vh - 450px )",
            }}
          >
            Site Replication is not configured.
          </Box>
        ) : null}

        {isAddOpen ? (
          <AddReplicationSitesModal
            existingSites={sites}
            onClose={() => {
              setIsAddOpen(false);
              getSites();
            }}
          />
        ) : null}

        <HelpBox
          title={"Site Replication"}
          iconComponent={<RecoverIcon />}
          help={
            <Fragment>
              This feature allows multiple independent MinIO sites (or clusters)
              that are using the same external IDentity Provider (IDP) to be
              configured as replicas. In this situation the set of replica sites
              are referred to as peer sites or just sites.
              <br />
              <br />
              You can learn more at our{" "}
              <a
                href="https://github.com/minio/minio/tree/master/docs/site-replication?ref=con"
                target="_blank"
                rel="noreferrer"
              >
                documentation
              </a>
              .
            </Fragment>
          }
        />

        {deleteAll ? (
          <ConfirmDialog
            title={`Delete All`}
            confirmText={"Delete"}
            isOpen={true}
            titleIcon={<ConfirmDeleteIcon />}
            isLoading={false}
            onConfirm={() => {
              const siteNames = sites.map((s: any) => s.name);
              removeSites(true, siteNames);
            }}
            onClose={() => {
              setIsDeleteAll(false);
            }}
            confirmationContent={
              <DialogContentText>
                Are you sure you want to remove all the replication sites?.
              </DialogContentText>
            }
          />
        ) : null}
      </PageLayout>
    </Fragment>
  );
};

const connector = connect(null, {
  setErrorSnackMessage,
  setSnackBarMessage,
});

export default connector(SiteReplication);
