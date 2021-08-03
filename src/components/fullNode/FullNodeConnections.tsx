import React, {useState} from 'react';
import { Trans } from '@lingui/macro';
import { useSelector, useDispatch } from 'react-redux';
import { Delete as DeleteIcon } from '@material-ui/icons';
import styled from 'styled-components';
import {
  Card,
  FormatBytes,
  FormatLargeNumber,
  Loading,
  Table,
  IconButton,
} from '@apple/core';
import {Box, Button, Tooltip} from '@material-ui/core';
import { service_connection_types } from '../../util/service_names';
import Connection from '../../types/Connection';
import FullNodeCloseConnection from './FullNodeCloseConnection';
import type { RootState } from '../../modules/rootReducer';
import useOpenDialog from '../../hooks/useOpenDialog';
import FullNodeAddConnection from './FullNodeAddConnection';
import Flex from "../core/components/Flex";
import TooltipIcon from "../core/components/TooltipIcon";
import {
  openOfficialConnection
} from "../../modules/fullnodeMessages";

const StyledIconButton = styled(IconButton)`
  padding: 0.2rem;
`;

const cols = [
  {
    minWidth: '200px',
    field(row: Connection) {
      return (
        <Tooltip title={row.node_id}>
          <span>{row.node_id}</span>
        </Tooltip>
      );
    },
    title: <Trans>Node ID</Trans>,
  },
  {
    field: 'peer_host',
    title: <Trans>IP address</Trans>,
  },
  {
    field(row: Connection) {
      return `${row.peer_port}/${row.peer_server_port}`;
    },
    title: <Trans>Port</Trans>,
  },
  {
    field(row: Connection) {
      return (
        <>
          <FormatBytes
            value={row.bytes_written}
            unit="MiB"
            removeUnit
            fixedDecimals
          />
          /
          <FormatBytes
            value={row.bytes_read}
            unit="MiB"
            removeUnit
            fixedDecimals
          />
        </>
      );
    },
    title: <Trans>MiB Up/Down</Trans>,
  },
  {
    field(row: Connection) {
      // @ts-ignore
      return service_connection_types[row.type];
    },
    title: <Trans>Connection type</Trans>,
  },
  {
    field: (row: Connection) => <FormatLargeNumber value={row.peak_height} />,
    title: <Trans>Height</Trans>,
  },
  {
    title: <Trans>Actions</Trans>,
    field(row: Connection) {
      return (
        <FullNodeCloseConnection nodeId={row.node_id}>
          {({ onClose }) => (
            <StyledIconButton onClick={onClose}>
              <DeleteIcon />
            </StyledIconButton>
          )}
        </FullNodeCloseConnection>
      );
    },
  },
];

export default function Connections() {
  const openDialog = useOpenDialog();
  const dispatch = useDispatch();
  const connections = useSelector(
    (state: RootState) => state.full_node_state.connections,
  );

  const [error, setError] = useState<Error | null>(null);

  function handleAddPeer() {
    openDialog(<FullNodeAddConnection />);
  }

  async function handleOpenOfficialPeer() {
    setError(null);

    try {
      await dispatch(openOfficialConnection());
    } catch (error) {
      setError(error);
    }
  }

  return (
    <Card
      title={<Trans>Connections</Trans>}
      action={
        <Flex alignItems="center" gap={1}>
          <Button onClick={handleOpenOfficialPeer}
            variant="contained"
            color="primary"
          >
            <Trans>Connect to Full Node list</Trans>
          </Button>
          <Button onClick={handleAddPeer} variant="outlined">
            <Trans>Connect to other peers</Trans>
          </Button>
        </Flex>
      }
    >
      {connections ? (
        <Table cols={cols} rows={connections} />
      ) : (
        <Loading center />
      )}
    </Card>
  );
}
