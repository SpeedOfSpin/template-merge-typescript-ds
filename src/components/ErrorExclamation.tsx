import React from 'react';
import { observer } from 'mobx-react-lite';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Box } from './Box/Box';
import { ExclamationIconSVG } from '../assets/Icons/ExclamationIconSVG';
import { theme } from '../Styles/AppTheme';

interface Props {
  haveError: boolean;
  displayName?: string;
  validationMessage: () => string;
  style?: any;
}
export const ErrorExclamationView: React.FC<Props> = observer((props: Props) => {
  const errorLabel = () => {
    if (props.haveError) {
      return (
        <Box display={'flex'} ml={1}>
          {/*<Box>
                        <Box mb={1}>{props.displayName ? <Label color={"error"}>{props.displayName}</Label> : <Label color={"error"}>{props.displayName}</Label>}</Box>
                    </Box>*/}
          <Box mt={'0'}>
            <Tippy content={<span>{props.validationMessage()}</span>}>
              <ExclamationIconSVG
                color={'white'}
                style={{ outline: 'none' }}
                backgroundcolor={theme.palette.error.c_500}
              />
            </Tippy>
          </Box>
        </Box>
      );
    } else {
      return null;
    }
  };

  return errorLabel();
});
