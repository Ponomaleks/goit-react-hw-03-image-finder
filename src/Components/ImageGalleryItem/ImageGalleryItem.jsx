export default function ImageGalleryItem({ card: { id, webformatURL, tags } }) {
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
}
