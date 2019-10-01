import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";

export class modals extends Component {
  render() {
    const {
      subject,
      agenda,
      companyName,
      meeting_date,
      post_date,
      meeting_no,
      announce,
      meeting_time,
      meeting_place,
      honorific,
      authorized_name,
      authorized_position,
      onRequestClose
    } = this.props;

    return (
      <Modal onRequestClose={onRequestClose} effect={Effect.ScaleUp}>
        <h6>{companyName}</h6>
        {subject}
        {agenda}

        {meeting_no}
        {announce}
        {meeting_time}
        {meeting_place}
        {honorific}
        {authorized_name}
        {authorized_position}
        {meeting_date}
        {post_date}
        <Button onClick={ModalManager.close}>Close</Button>
      </Modal>
    );
  }
}

export default modals;
