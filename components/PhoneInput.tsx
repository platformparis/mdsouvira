import * as React from 'react';
import { useState } from 'react';
import { E164Number } from 'libphonenumber-js';
import 'react-phone-number-input/style.css'
import SrcPhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';

interface PhoneInputProps {
      className?: string
      placeholder?: string
      name?: string
}

export function PhoneInput({ className, placeholder, name }: PhoneInputProps) {
      let [value, setValue]: [E164Number | undefined, any] = useState()
      return <SrcPhoneInput
                  onChange={setValue}
                  value={value}
                  phonevalue={value}
                  name={name}
                  className={className}
                  placeholder={placeholder}
                  defaultCountry="FR"
                  error={value ? (isPossiblePhoneNumber(value) ? undefined : 'Numéro de téléphone invalide') : undefined}
            />
}
