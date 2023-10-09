import Sheet from 'react-modal-sheet';

function ModalSheet({
  isOpen,
  onClose,
  modalSheetHeight,
}: {
  isOpen: boolean;
  onClose: () => void;
  modalSheetHeight: number;
}) {
  return (
    <div>
      <Sheet
        isOpen={isOpen}
        onClose={() => onClose()}
        snapPoints={[modalSheetHeight + 1, modalSheetHeight, modalSheetHeight - 1, 0]}
        initialSnap={1}
        detent='content-height'
      >
        <Sheet.Backdrop onTap={onClose} />
        <Sheet.Container style={{ borderRadius: '32px 32px 0px 0px' }}>
          <Sheet.Header>
            <div className='text-center text-lg font-medium border border-red-400'>Special Offers</div>
          </Sheet.Header>
          <Sheet.Content>
            <Sheet.Scroller>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet eligendi sunt
                consequatur aperiam porro vel eveniet neque, animi natus. Soluta laudantium placeat
                fugit rem, provident facilis! Quia, perspiciatis laboriosam?
              </p>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </div>
  );
}

const SpecialOfferModalButton = ({ onClose }: { onClose: () => void }) => {
  return (
    <button
      className='h-[52px] w-full shrink-0 rounded-[18px] bg-[#15BCD3] text-base font-semibold text-white'
      onClick={onClose}
    >
      No Thanks!
    </button>
  );
};

export default ModalSheet;
