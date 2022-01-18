import React from 'react';
import Link from 'next/link';
import {
  FacebookShareCount,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share';

export default function ProductCard({ permalink, image, name, description, price, soldOut}) {
  const shareUrl = window.location.href;
  return (
    <Link href="/product/[permalink]" as={`/product/${permalink}`}>
      <a className="mb-5 d-block font-color-black cursor-pointer">
        <div
          className="mb-3"
          style={{
            paddingBottom: '125%',
            background: `url("${image}") center center/cover`
          }}
        >
          {soldOut && <div className="product-card--overlay-text">SOLD OUT</div>}
        </div>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={24} />
          <FacebookShareCount url={shareUrl} />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={24} />
        </WhatsappShareButton>
        <PinterestShareButton url={shareUrl}>
          <PinterestIcon size={24} />
          <PinterestShareCount url={shareUrl} />
        </PinterestShareButton>
        <p className="font-size-subheader mb-2 font-weight-medium">
          {name}
        </p>
        <p className="mb-2 font-color-medium">{description}</p>
        <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
          {price}
        </p>
      </a>
    </Link>
  );
}
