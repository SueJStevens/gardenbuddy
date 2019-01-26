import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Collapsible, CollapsibleItem } from "react-materialize";


function PlantInformation(props) {
    return (
            <Col l={8} m={9} s={12}>
                <Collapsible popout defaultActiveKey={1}>
                    <CollapsibleItem header='First' icon='filter_drama'>
                        Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                    <CollapsibleItem header='Second' icon='place'>
                        Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                    <CollapsibleItem header='Third' icon='whatshot'>
                        Lorem ipsum dolor sit amet.
                </CollapsibleItem>
                </Collapsible>
            </Col>
    )
}

export default PlantInformation;

