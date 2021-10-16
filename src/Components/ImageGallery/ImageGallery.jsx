import ImageGalleryItem from '../ImageGalleryItem';

export default function ImageGallery(cards) {
  return (
    <ul className="ImageGallery">
      {cards.map(card => {
        return <ImageGalleryItem card />;
      })}
    </ul>
  );
}
