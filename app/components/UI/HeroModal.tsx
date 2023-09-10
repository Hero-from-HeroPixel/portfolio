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
import { ModalButton } from '@/app/components/UI/ModalButton';
import { cn } from '@/app/utils/cn';

type Props = {
	modalTitle: string;
	ModalBodyContent: React.ReactNode;
	ModalActions?: React.ReactNode;
	CloseProps?: ButtonProps;
	OpenButton: {
		title: string;
		className?: string;
	};
};

export function HeroModal({
	modalTitle,
	ModalBodyContent,
	ModalActions,
	CloseProps,
	OpenButton,
}: Props) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	return (
		<>
			<ModalButton onClick={onOpen} className={cn('font-light', OpenButton?.className)}>
				{OpenButton.title}
			</ModalButton>
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
									Close
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
