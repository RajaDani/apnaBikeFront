
import Pricing from '.'
import ModalExample from './ModalExample'
import React, { useState } from 'react'


export default function PricingParent() {

    const [inModal, setinModal] = useState(false);

    function toggleSignModal(value) {
        if (value === 1) {
            setinModal(!inModal);
        }
    }

    return (
        <div>
            <Pricing toggleSignModal={toggleSignModal} />
            <ModalExample toggleValue={inModal} />
        </div>
    )
}
