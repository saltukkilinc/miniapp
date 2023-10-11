import Sheet from 'react-modal-sheet';
import close from '../../assets/icons/close.jpg';

interface ModalSheetPropTypes {
  isOpen: boolean;
  onClose: () => void;
  modalSheetHeight: number;
  children: React.ReactNode;
  title: string;
}

function ModalSheet({ isOpen, onClose, modalSheetHeight, children, title }: ModalSheetPropTypes) {
  return (
    <div>
      <Sheet
        isOpen={isOpen}
        onClose={() => onClose()}
        snapPoints={[modalSheetHeight + 1, modalSheetHeight, modalSheetHeight - 1, 0]}
        initialSnap={1}
        detent='content-height'
      >
        <Sheet.Backdrop onTap={onClose} style={{ background: 'rgba(0, 0, 0, 0.29)' }} />
        <Sheet.Container style={{ borderRadius: '32px 32px 0px 0px', boxShadow: 'none' }}>
          <Sheet.Header>
            <div className='relative border-b border-b-border-secondary pb-[9.5px] pt-2'>
              <div className='mx-auto h-1 w-16 rounded-[2px] bg-[#D2D6E2]'></div>
              <h2 className='mt-[17.5px] text-center text-[18px] font-medium leading-normal text-primary-text'>
                {title}
              </h2>
              <img
                src={close}
                alt='close icon'
                className='absolute right-6 top-6 w-6'
                onClick={onClose}
              />
            </div>
          </Sheet.Header>
          <Sheet.Content>
            <Sheet.Scroller>{children}</Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </div>
  );
}

export default ModalSheet;
