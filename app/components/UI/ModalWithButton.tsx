'use client';
import React, { ButtonHTMLAttributes } from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/react';

type Props = {
	Button: React.ReactElement;
	modalTitle: string;
	ModalActions: React.ReactNode;
	ModalBodyContent: React.ReactNode;
};

export default function ModalWithButton({
	Button,
	modalTitle,
	ModalBodyContent,
	ModalActions,
}: Props) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			{Button}
			<Modal isOpen={isOpen} placement={'bottom-center'} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								{modalTitle}
							</ModalHeader>
							<ModalBody>{ModalBodyContent}</ModalBody>
							<ModalFooter>{ModalActions}</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
