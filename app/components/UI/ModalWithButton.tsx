'use client';
import React from 'react';
import { Button, ButtonProps } from '@nextui-org/button';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/modal';

const defaultButtonProps: ButtonProps = {
	radius: 'full',
	color: 'default',
	variant: 'solid',
};

type Props = {
	BtnProps?: ButtonProps;
	modalTitle: string;
	ModalBodyContent: React.ReactNode;
	ModalActions?: React.ReactNode;
	CloseProps?: ButtonProps;
};

export default function ModalWithButton({
	BtnProps = defaultButtonProps,
	modalTitle,
	ModalBodyContent,
	ModalActions,
	CloseProps = defaultButtonProps,
}: Props) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<Button {...BtnProps} onPress={onOpen}>
				{BtnProps.children}
			</Button>
			<Modal isOpen={isOpen} placement={'bottom-center'} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								{modalTitle}
							</ModalHeader>
							<ModalBody>{ModalBodyContent}</ModalBody>
							<ModalFooter>
								<Button {...CloseProps} onPress={onClose}>
									{CloseProps.children}
								</Button>
								{ModalActions}
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
