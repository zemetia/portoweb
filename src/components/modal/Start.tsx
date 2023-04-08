import Modal from '@/components/modal/Modal';
import { Input } from 'postcss';
import React from 'react';

export default function Start() {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal open={open} setOpen={setOpen}>
        <Modal.Body>
          <p>This is the modal content.</p>
          Pinned
        </Modal.Body>
      </Modal>
    </div>
  );
}
