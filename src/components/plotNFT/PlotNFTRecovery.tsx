import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import { Typography, Button } from '@material-ui/core';
import { bech32m } from "bech32";
import { openDialog } from '../../modules/dialog';
import {
  AlertDialog,
  Card,
  Flex,
  Form,
  InputBase,
  TextField as AppleTextField,
} from '@apple/core';
import { useForm } from 'react-hook-form';
import {
  recover_pool_nft
} from '../../modules/message';
import { RootState } from "../../modules/rootReducer";
import { mojo_to_apple } from '../../util/apple';

const StyledInputBase = styled(InputBase)`
  min-width: 15rem;
`;
type FormData = {
  contract_address: string;
  launcher_id: string;
};

export default function PlotNFTRecovery() {
  const dispatch = useDispatch();
  const syncing = useSelector(
    (state: RootState) => state.wallet_state.status.syncing,
  );
 const [sending, setSending] = useState<boolean>(false);
  const methods = useForm<FormData>({
    shouldUnregister: false,
    defaultValues: {
      contract_address: '',
      launcher_id: '',
    },
  });

  function checkAddress(stringToCheck: string): boolean {
    try {
      bech32m.decode(stringToCheck);
      return true;
    } catch (err) {
      return false;
    }
  }

  async function handleSubmit(data: FormData) {
    if (sending) return
    setSending(true);
    const { contract_address, launcher_id } = data;
    if (!launcher_id) {
      dispatch(
        openDialog(
          <AlertDialog>
            <Trans>Please Input NFT Launcher Id</Trans>
          </AlertDialog>,
        ),
      );
      setSending(false);
      return;
    }
    if (syncing) {
      dispatch(
        openDialog(
          <AlertDialog>
            <Trans>Please finish syncing before making a transaction</Trans>
          </AlertDialog>,
        ),
      );
      setSending(false);
      return;
    }

    if (contract_address !== '' && !checkAddress(contract_address)) {
      dispatch(
        openDialog(
          <AlertDialog>
            <Trans>Pool Contract Address is not properly formatted.</Trans>
          </AlertDialog>,
        ),
      );
      setSending(false);
      return;
    }
    try {
      const res = await dispatch(recover_pool_nft(contract_address, launcher_id));
      if (res.success) {
        setContent("Total Amount: " + mojo_to_apple(res.total_amount) +
        "<br/>" + "Recovered Amount: " + mojo_to_apple(res.amount))
      } else {
        dispatch(
          openDialog(
            <AlertDialog>{res.error}</AlertDialog>,
          ),
        );
      }
      setSending(false);
    } catch (error) {
      dispatch(
        openDialog(
          <AlertDialog>{error}</AlertDialog>,
        ),
      );
      setSending(false);
    }
  }
const [typography, setContent] = useState(" ")
  return (
    <Card
      title={<Trans>NFT Recovery</Trans>}
      tooltip={<Trans>visiting the Pool tab of your CHIA-GUI.
using this command: chia plotNFT show.
Note: you have to do this on the CHIA client, not the fork!</Trans>}
    >
    <Form methods={methods} onSubmit={handleSubmit}>
      <Flex flexDirection="column" gap={3}>
        <Flex alignItems="center" gap={1}>
          <AppleTextField
            name="pool_contract"
            variant="filled"
            color="secondary"
            placeholder=''
            fullWidth
            label="Pool Contract Address"
          />
        </Flex>
        <Flex alignItems="center" gap={1}>
          <AppleTextField
            name="launcher_id"
            variant="filled"
            color="secondary"
            placeholder='0x...'
            fullWidth
            label="NFT Launcher ID"
          />
        </Flex>
        <Flex gap={1}>
          <Flex flexGrow={1}>
            <Flex flexDirection="column" gap={1}>
            <Typography variant="body1" color="textSecondary"  dangerouslySetInnerHTML={{__html: typography}}>
            </Typography>
            </Flex>
          </Flex>
          <Flex flexDirection="column" gap={1}>
            <Flex alignItems="center" justifyContent="flex-end" gap={1}>
              <Button variant="contained" color="primary" type="submit" disabled={sending}>
                <Trans>RECOVER</Trans>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Form>
   </Card>
  );
}
