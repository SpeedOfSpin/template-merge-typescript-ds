import React, { CSSProperties, FocusEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import clsx from 'clsx';
import { IMaskInput } from 'react-imask';
import { Label, TextField } from 'react-aria-components';
import { theme } from '../../Styles/AppTheme';
import { PasswordSVG } from '../../assets/Icons/PasswordSVG';
import { PasswordSVGVisible } from '../../assets/Icons/PasswordSVGVisible';
import { getThemeColorOption } from '../../Helpers/StyleHelpers';
import { CopyToClipboardButton } from '../CopyToClipboardButton';
import { ErrorExclamationView } from '../ErrorExclamation';
import { Flex } from '../Flex/Flex';
import { ClearText } from '../General/ClearText';
import { IKeyState } from '../IKeyState';
import { Box } from '../Box/Box';
import { Text } from '../Labels/Text';
import { isEmptyOrWhitespace, isNullOrUndefined } from '../../Utils';

const EyeIconContainer = styled.div`
  cursor: pointer;
  min-width: 34px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    opacity: 0.8;
  }
`;
const InputLabel = styled(Label)`
  ${theme.styles.fieldLabel}
`;
const Container = styled(TextField)`
  .input-container {
    display: flex;
    align-items: center;
    position: relative;
    &[data-focused] {
      outline: 1px solid red;
      outline-offset: -1px;
    }
  }
  .input-field {
    ${theme.defaultStyle}
    border: none;
    outline: none;
    flex-grow: 1;
  }
  .input-label {
  }
  .icon {
    cursor: pointer;
  }
  .left-icon {
    padding-left: 4px;
    padding-right: 4px;
    margin-top: 5px;
  }
  .right-icon {
    margin-top: 5px;
    padding-left: 4px;
    padding-right: 4px;
  }
  .clear-icon {
    opacity: 0; /* Start with the icon invisible */
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease; /* Smooth transition for opacity and visibility */
  }
  .input-container:focus-within .clear-icon,
  .input-container:hover .clear-icon {
    opacity: 1;
    visibility: visible;
  }
  ${theme.styles.input}
`;
/**
 * Button interface.
 */
/**
 * Represents the props for the TextInput component.
 */
export interface IInputBaseProps {
  /**
   * An optional id for use with the button.
   */
  id?: string;
  /**
   * An optional class name for use with the button.
   */
  className?: string;
  /**
   * A callback function that is called when the value of the input changes.
   * @param value - The new value of the input.
   * @param keyState - The state of the keyboard keys.
   * @param e - The form event associated with the input change.
   */
  onChange?: (value: string, keyState: IKeyState, e?: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /**
   * Specifies whether the input is disabled.
   */
  disabled?: boolean;
  /**
   * The children of the TextInput component.
   */
  children?: React.ReactNode;
  /**
   * The value of the input.
   */
  value: () => string;
  /**
   * Specifies whether the copy button should be displayed.
   */
  copyToClipboard?: boolean;
  /**
   * The text content to display in the control label.
   */
  displayName?: string;
  /**
   * The text content to display in the placeholder.
   */
  placeholder?: string;
  /**
   * The text content to display in the error message.
   */
  validationMessage?: () => string;
  /**
   * Specifies whether the component should be treated as a textarea.
   */
  multiline?: boolean;
  /**
   * The number of rows in a multiline box.
   */
  rows?: number;
  /**
   * Specifies whether the input should not be automatically filled by the browser.
   */
  autoFill?: boolean;
  /**
   * The styling of the control.
   */
  style?: CSSProperties | undefined;
  /**
   * The color of the label.
   */
  labelColor?: string;
  /**
   * The description text to show under the text.
   */
  description?: string;
  /**
   * Any JSX element to be displayed as a prefix.
   */
  prefix?: JSX.Element;
  /**
   * Any JSX element to be displayed as a suffix.
   */
  suffix?: JSX.Element | undefined;
  /**
   * The type of the input control.
   */
  type?: 'password' | 'text' | 'email' | 'number';
  /**
   * Masked options for the input.
   */
  maskedOptions?: any;
  /**
   * Specifies whether the input is read-only.
   */
  readonly?: boolean;
  /**
   * Used to make Cypress testing easier.
   */
  cy?: string;
  /**
   * Specifies whether the label should be hidden.
   */
  noLabel?: boolean;
  /**
   * Specifies the maximum length of the input.
   * If undefined, the default value is 10000.
   */
  maxLength?: number;
  /**
   * Specifies whether the input field should automatically get focus when the page loads.
   */
  autoFocus?: boolean;
  /**
   * Specifies whether the label text should be transformed to uppercase.
   */
  uppercaseLabel?: boolean;
  /**
   * A render function that returns the JSX element to be rendered.
   * @param props - The props passed to the TextInput component.
   * @returns The JSX element to be rendered.
   */
  render?: (props: IInputBaseProps) => JSX.Element;
  /**
   * A function to be called when the input field gets focus.
   * @param event - The focus event.
   */
  onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  /**
   * A function to be called when the input field loses focus.
   * @param event - The focus event.
   */
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}

export const TextInput: React.FC<IInputBaseProps> = observer((props: IInputBaseProps) => {
  return <TextInputBase {...props} />;
});
export const TextInputBase: React.FC<IInputBaseProps> = observer((props: IInputBaseProps) => {
  const haveError = !isEmptyOrWhitespace(props.validationMessage?.() as string);
  const isMultiLine = !isNullOrUndefined(props.multiline) ? props.multiline : false;
  const errorLabel = getThemeColorOption('error');
  const [type, setType] = useState(props.type);
  //#region Code Behind
  const keyState = useRef<IKeyState>({ enterKeyPressed: false, backspaceKeyPressed: false, deleteKeyPressed: false });
  const labelRef = React.useRef<HTMLLabelElement>(null);
  const inputRef = React.useRef<any>(null);

  useEffect(() => {
    const idFor = labelRef.current?.getAttribute('for');
    const id = labelRef.current?.getAttribute('id');
    if (idFor) {
      inputRef.current?.maskRef.el.input.setAttribute('id', idFor);
      inputRef.current?.maskRef.el.input.setAttribute('aria-labelledby', id);
    }
  }, []);
  const getClassNames = () => {
    return clsx({
      [props.className!]: !isEmptyOrWhitespace(props.className as string),
      ['editinput']: true,
      'input-field': true,
    });
  };

  const getValidationMessage = (): string => {
    return isEmptyOrWhitespace(props.validationMessage?.() as string) ? '' : (props.validationMessage?.() as string);
  };
  const isDisabled = (): boolean => {
    return props.disabled || false;
  };
  const onChange = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const newValue = e.currentTarget.value;
    updateValue(newValue);
  };
  const updateValue = (newValue: string) => {
    if (!isEmptyOrWhitespace(newValue.toString()) && newValue.toString()!.length > props.maxLength!) {
      return;
    }
    /* if (props.type === "number") {
            newValue = parseFloat(newValue as any);
        }*/
    if (props.onChange) {
      props.onChange(newValue, keyState.current);
    }
  };
  const getAutoFill = (): 'on' | 'off' | 'new-password' => {
    return isNullOrUndefined(props.autoFill) ? 'on' : props.autoFill ? 'on' : 'new-password';
  };
  const getStyles = ():
    | {
        /*empty*/
      }
    | undefined => {
    return !isNullOrUndefined(props.style) ? props.style : undefined;
  };
  const getType = (): string => {
    return isEmptyOrWhitespace(type as string) ? 'text' : type!;
  };
  const getLabelTextTransform = (): any => {
    return props.uppercaseLabel ? 'uppercase' : 'inherit';
  };
  const canDisplayClear = (): boolean => {
    if (!isNullOrUndefined(getValue())) {
      return !isEmptyOrWhitespace(getValue()) && !isDisabled();
    }
    return false;
  };
  const onBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    inputRef.current?.maskRef.el.input.removeAttribute('data-focused');
    if (props.onBlur) {
      props.onBlur(event);
    }
  };
  const onFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    inputRef.current?.maskRef.el.input.setAttribute('data-focused', 'true');
    if (props.onFocus) {
      props.onFocus(event);
    }
  };
  const canDisplayEyeIcon = (): boolean => {
    let retVal = false;
    if (!isNullOrUndefined(getValue()) && props.type === 'password') {
      retVal = !isEmptyOrWhitespace(getValue()) && !isDisabled();
    }
    return retVal;
  };
  const handleEyeClick = () => {
    setType(type === 'password' ? 'text' : 'password');
  };
  const getEyeIcon = () => {
    if (type === 'password') {
      return <PasswordSVG onClick={handleEyeClick} style={{ transform: 'scale(1.2)', transformOrigin: '10px 6px' }} />;
    }
    return (
      <PasswordSVGVisible onClick={handleEyeClick} style={{ transform: 'scale(1.15)', transformOrigin: '10px 6px' }} />
    );
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement> | undefined): void => {
    const keyId: number = event!.keyCode;

    switch (keyId) {
      case 8:
        keyState.current.backspaceKeyPressed = true;
        keyState.current.enterKeyPressed = false;
        keyState.current.deleteKeyPressed = false;
        break;
      case 13:
        keyState.current.backspaceKeyPressed = false;
        keyState.current.enterKeyPressed = true;
        keyState.current.deleteKeyPressed = false;
        break;
      case 46:
        keyState.current.backspaceKeyPressed = false;
        keyState.current.enterKeyPressed = false;
        keyState.current.deleteKeyPressed = true;
        break;
      default:
        break;
    }
    if (keyId === 8 || keyId === 13 || keyId === 46) {
      updateValue(getValue());
    }
  };
  const clearTextCommand = () => {
    if (props.onChange) {
      props.onChange('', keyState.current);
    }
  };
  const getDataCY = (): string => {
    const regex = /[^a-z]/gi;
    const result = (props.displayName || '').replace(regex, '').toLowerCase();
    return props.cy || result;
  };
  const getValue = (): string => {
    return props.value() || '';
  };
  //#endregion Code Behind

  const displayLabel = (
    <Flex>
      <InputLabel
        ref={labelRef}
        className="input-label"
        style={{ color: haveError ? errorLabel : props.labelColor, textTransform: getLabelTextTransform() }}
      >
        {props.displayName || <>&nbsp;</>}
      </InputLabel>
      <ErrorExclamationView haveError={haveError} validationMessage={() => getValidationMessage()} />
    </Flex>
  );

  const multiLineTextBox = (
    <Box showIf={isMultiLine}>
      <Box className={'input-container'}>
        <textarea
          id={props.id}
          autoFocus={props.autoFocus}
          className={getClassNames()}
          disabled={isDisabled()}
          autoComplete={getAutoFill()}
          //prefix={props.prefix as any}
          onChange={onChange as any}
          //onKeyDown={onKeyDown}
          placeholder={props.placeholder}
          style={getStyles()}
          value={getValue()}
          rows={props.rows}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          data-cy={getDataCY()}
        ></textarea>
        {/*{canDisplayClear() && <ClearText command={clearTextCommand} />}*/}
      </Box>
    </Box>
  );
  const inputEditBox = (
    <Box showIf={!isMultiLine && !props.readonly}>
      <Box className={'input-container'} style={getStyles()}>
        <Box showIf={!isNullOrUndefined(props.prefix)} className={'left-icon'}>
          {props.prefix}
        </Box>
        <IMaskInput
          id={props.id}
          ref={inputRef}
          autoFocus={props.autoFocus}
          {...props.maskedOptions}
          value={getValue()}
          onAccept={(value, mask) => {
            updateValue(mask.unmaskedValue);
            //console.log(value, mask);
          }}
          autoComplete={getAutoFill()}
          onKeyDown={onKeyDown}
          onChange={() => null}
          onBlur={onBlur}
          onFocus={onFocus}
          type={getType()}
          placeholder={props.placeholder}
          readOnly={props.readonly}
          unmask={'typed'}
          className={getClassNames()}
          disabled={isDisabled()}
          data-cy={getDataCY()}
          maxLength={props.maxLength || 1000}
        />
        {canDisplayClear() && <ClearText className="icon clear-icon" onClick={clearTextCommand} />}
        {canDisplayEyeIcon() && (
          <Flex
            minWidth="25px"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            style={{ cursor: 'pointer' }}
          >
            {getEyeIcon()}
          </Flex>
        )}
        <Box showIf={!isNullOrUndefined(props.suffix)} className={'right-icon'}>
          {props.suffix}
        </Box>
      </Box>
    </Box>
  );

  const copyButton = props.copyToClipboard ? <CopyToClipboardButton text={getValue()} /> : null;

  if (props.render) {
    return props.render(props);
  }

  return (
    <>
      {!props.readonly ? (
        <Container className={props.className}>
          {!props.noLabel && displayLabel}
          {multiLineTextBox}
          {inputEditBox}
        </Container>
      ) : (
        <Flex showIf={props.readonly} alignItems={'self-end'}>
          <Text>{getValue()}</Text>
        </Flex>
      )}
    </>
  );
});

TextInput.defaultProps = {
  maxLength: 10000,
  maskedOptions: { mask: /.*/ },
};
