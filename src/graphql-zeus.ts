/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["AlternativeAmountAndPrice"]: AliasType<{
	_key?:true,
	_type?:true,
	amount?:ValueTypes["LocaleStringEngDefault"],
	price?:true,
		__typename?: true
}>;
	["Block"]: AliasType<{
	_key?:true,
	_type?:true,
	children?:ValueTypes["Span"],
	style?:true,
	list?:true,
		__typename?: true
}>;
	["Categories"]: AliasType<{
	/** Document ID */
	_id?:true,
	/** Document type */
	_type?:true,
	/** Date the document was created */
	_createdAt?:true,
	/** Date the document was last modified */
	_updatedAt?:true,
	/** Current document revision */
	_rev?:true,
	_key?:true,
	format?:true,
	name?:ValueTypes["LocaleStringEngDefault"],
	/** Order your categories */
	priority?:true,
		__typename?: true
}>;
	["CategoriesFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	format?:string,
	/** All documents that are not equal to given value */
	format_not?:string,
	/** All documents contain (match) the given word/words */
	format_matches?:string,
	format_in?:string[],
	format_not_in?:string[],
	/** All documents that are equal to given value */
	priority?:number,
	/** All documents that are not equal to given value */
	priority_not?:number,
	/** All documents are less than given value */
	priority_lt?:number,
	/** All documents are less than or equal to given value */
	priority_lte?:number,
	/** All documents are greater than given value */
	priority_gt?:number,
	/** All documents are greater than or equal to given value */
	priority_gte?:number,
	/** All documents that are drafts */
	is_draft?:boolean
};
	["Color"]: AliasType<{
	_key?:true,
	_type?:true,
	hex?:true,
	alpha?:true,
	hsl?:ValueTypes["HslaColor"],
	hsv?:ValueTypes["HsvaColor"],
	rgb?:ValueTypes["RgbaColor"],
		__typename?: true
}>;
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
`date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
8601 standard for representation of dates and times using the Gregorian calendar. */
["DateTime"]:unknown;
	/** A Sanity document */
["Document"]:AliasType<{
		/** Document ID */
	_id?:true,
	/** Document type */
	_type?:true,
	/** Date the document was created */
	_createdAt?:true,
	/** Date the document was last modified */
	_updatedAt?:true,
	/** Current document revision */
	_rev?:true;
		['...on Categories']?: Omit<ValueTypes["Categories"],keyof ValueTypes["Document"]>;
		['...on Items']?: Omit<ValueTypes["Items"],keyof ValueTypes["Document"]>;
		['...on Option']?: Omit<ValueTypes["Option"],keyof ValueTypes["Document"]>;
		['...on Optiongroup']?: Omit<ValueTypes["Optiongroup"],keyof ValueTypes["Document"]>;
		['...on SanityFileAsset']?: Omit<ValueTypes["SanityFileAsset"],keyof ValueTypes["Document"]>;
		['...on SanityImageAsset']?: Omit<ValueTypes["SanityImageAsset"],keyof ValueTypes["Document"]>;
		['...on SiteSettings']?: Omit<ValueTypes["SiteSettings"],keyof ValueTypes["Document"]>;
		__typename?: true
}>;
	["Figure"]: AliasType<{
	_key?:true,
	_type?:true,
	asset?:ValueTypes["SanityImageAsset"],
	hotspot?:ValueTypes["SanityImageHotspot"],
	crop?:ValueTypes["SanityImageCrop"],
		__typename?: true
}>;
	["File"]: AliasType<{
	_key?:true,
	_type?:true,
	asset?:ValueTypes["SanityFileAsset"],
		__typename?: true
}>;
	["Geopoint"]: AliasType<{
	_key?:true,
	_type?:true,
	lat?:true,
	lng?:true,
	alt?:true,
		__typename?: true
}>;
	["HslaColor"]: AliasType<{
	_key?:true,
	_type?:true,
	h?:true,
	s?:true,
	l?:true,
	a?:true,
		__typename?: true
}>;
	["HsvaColor"]: AliasType<{
	_key?:true,
	_type?:true,
	h?:true,
	s?:true,
	v?:true,
	a?:true,
		__typename?: true
}>;
	["Image"]: AliasType<{
	_key?:true,
	_type?:true,
	asset?:ValueTypes["SanityImageAsset"],
	hotspot?:ValueTypes["SanityImageHotspot"],
	crop?:ValueTypes["SanityImageCrop"],
		__typename?: true
}>;
	["Information"]: AliasType<{
	_key?:true,
	_type?:true,
	introduction?:ValueTypes["LocaleBlockArray"],
	outroduction?:ValueTypes["LocaleBlockArray"],
		__typename?: true
}>;
	["Items"]: AliasType<{
	/** Document ID */
	_id?:true,
	/** Document type */
	_type?:true,
	/** Date the document was created */
	_createdAt?:true,
	/** Date the document was last modified */
	_updatedAt?:true,
	/** Current document revision */
	_rev?:true,
	_key?:true,
	name?:ValueTypes["LocaleStringEngDefault"],
	category?:ValueTypes["Categories"],
	description?:ValueTypes["LocaleText"],
	vegan?:true,
	allergens?:true,
	meatOrigin?:ValueTypes["MeatOrigin"],
	amount?:ValueTypes["LocaleStringEngDefault"],
	price?:true,
	alternativeAmountAndPrice?:ValueTypes["AlternativeAmountAndPrice"],
	image?:ValueTypes["Figure"],
	/** Order your items */
	priority?:true,
	optionGroups?:ValueTypes["Optiongroup"],
		__typename?: true
}>;
	["ItemsFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	category?:string,
	/** All documents that are equal to given value */
	price?:number,
	/** All documents that are not equal to given value */
	price_not?:number,
	/** All documents are less than given value */
	price_lt?:number,
	/** All documents are less than or equal to given value */
	price_lte?:number,
	/** All documents are greater than given value */
	price_gt?:number,
	/** All documents are greater than or equal to given value */
	price_gte?:number,
	/** All documents that are equal to given value */
	priority?:number,
	/** All documents that are not equal to given value */
	priority_not?:number,
	/** All documents are less than given value */
	priority_lt?:number,
	/** All documents are less than or equal to given value */
	priority_lte?:number,
	/** All documents are greater than given value */
	priority_gt?:number,
	/** All documents are greater than or equal to given value */
	priority_gte?:number,
	/** All documents that are drafts */
	is_draft?:boolean
};
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
["JSON"]:unknown;
	["LocaleBlockArray"]: AliasType<{
	_key?:true,
	_type?:true,
	deRaw?:true,
		__typename?: true
}>;
	["LocaleStringEngDefault"]: AliasType<{
	_key?:true,
	_type?:true,
	de?:true,
		__typename?: true
}>;
	["LocaleText"]: AliasType<{
	_key?:true,
	_type?:true,
	de?:true,
		__typename?: true
}>;
	["LocaleTextEngDefault"]: AliasType<{
	_key?:true,
	_type?:true,
	de?:true,
		__typename?: true
}>;
	["MeatOrigin"]: AliasType<{
	_key?:true,
	_type?:true,
	beef?:true,
	pork?:true,
	chicken?:true,
	otherMeat?:true,
		__typename?: true
}>;
	["Option"]: AliasType<{
	/** Document ID */
	_id?:true,
	/** Document type */
	_type?:true,
	/** Date the document was created */
	_createdAt?:true,
	/** Date the document was last modified */
	_updatedAt?:true,
	/** Current document revision */
	_rev?:true,
	_key?:true,
	name?:ValueTypes["LocaleStringEngDefault"],
	price?:true,
		__typename?: true
}>;
	["OptionFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	price?:number,
	/** All documents that are not equal to given value */
	price_not?:number,
	/** All documents are less than given value */
	price_lt?:number,
	/** All documents are less than or equal to given value */
	price_lte?:number,
	/** All documents are greater than given value */
	price_gt?:number,
	/** All documents are greater than or equal to given value */
	price_gte?:number,
	/** All documents that are drafts */
	is_draft?:boolean
};
	["Optiongroup"]: AliasType<{
	/** Document ID */
	_id?:true,
	/** Document type */
	_type?:true,
	/** Date the document was created */
	_createdAt?:true,
	/** Date the document was last modified */
	_updatedAt?:true,
	/** Current document revision */
	_rev?:true,
	_key?:true,
	name?:ValueTypes["LocaleStringEngDefault"],
	multiSelect?:true,
	options?:ValueTypes["Option"],
		__typename?: true
}>;
	["OptiongroupFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	multiSelect?:boolean,
	/** All documents that are not equal to given value */
	multiSelect_not?:boolean,
	/** All documents that are drafts */
	is_draft?:boolean
};
	["OrderSettings"]: AliasType<{
	_key?:true,
	_type?:true,
	email?:true,
	numberOfTables?:true,
		__typename?: true
}>;
	["Restaurant"]: AliasType<{
	_key?:true,
	_type?:true,
	name?:true,
	description?:ValueTypes["LocaleTextEngDefault"],
		__typename?: true
}>;
	["RgbaColor"]: AliasType<{
	_key?:true,
	_type?:true,
	r?:true,
	g?:true,
	b?:true,
	a?:true,
		__typename?: true
}>;
	["RootQuery"]: AliasType<{
SiteSettings?: [{	/** SiteSettings document ID */
	id:string},ValueTypes["SiteSettings"]],
Categories?: [{	/** Categories document ID */
	id:string},ValueTypes["Categories"]],
Items?: [{	/** Items document ID */
	id:string},ValueTypes["Items"]],
Optiongroup?: [{	/** Optiongroup document ID */
	id:string},ValueTypes["Optiongroup"]],
Option?: [{	/** Option document ID */
	id:string},ValueTypes["Option"]],
SanityImageAsset?: [{	/** SanityImageAsset document ID */
	id:string},ValueTypes["SanityImageAsset"]],
SanityFileAsset?: [{	/** SanityFileAsset document ID */
	id:string},ValueTypes["SanityFileAsset"]],
allSiteSettings?: [{	where?:ValueTypes["SiteSettingsFilter"],	/** Max documents to return */
	limit?:number,	/** Offset at which to start returning documents from */
	offset?:number},ValueTypes["SiteSettings"]],
allCategories?: [{	where?:ValueTypes["CategoriesFilter"],	/** Max documents to return */
	limit?:number,	/** Offset at which to start returning documents from */
	offset?:number},ValueTypes["Categories"]],
allItems?: [{	where?:ValueTypes["ItemsFilter"],	/** Max documents to return */
	limit?:number,	/** Offset at which to start returning documents from */
	offset?:number},ValueTypes["Items"]],
allOptiongroups?: [{	where?:ValueTypes["OptiongroupFilter"],	/** Max documents to return */
	limit?:number,	/** Offset at which to start returning documents from */
	offset?:number},ValueTypes["Optiongroup"]],
allOptions?: [{	where?:ValueTypes["OptionFilter"],	/** Max documents to return */
	limit?:number,	/** Offset at which to start returning documents from */
	offset?:number},ValueTypes["Option"]],
allSanityImageAssets?: [{	where?:ValueTypes["SanityImageAssetFilter"],	/** Max documents to return */
	limit?:number,	/** Offset at which to start returning documents from */
	offset?:number},ValueTypes["SanityImageAsset"]],
allSanityFileAssets?: [{	where?:ValueTypes["SanityFileAssetFilter"],	/** Max documents to return */
	limit?:number,	/** Offset at which to start returning documents from */
	offset?:number},ValueTypes["SanityFileAsset"]],
		__typename?: true
}>;
	["SanityAssetSourceData"]: AliasType<{
	_key?:true,
	_type?:true,
	/** A canonical name for the source this asset is originating from */
	name?:true,
	/** The unique ID for the asset within the originating source so you can programatically find back to it */
	id?:true,
	/** A URL to find more information about this asset in the originating source */
	url?:true,
		__typename?: true
}>;
	["SanityFileAsset"]: AliasType<{
	/** Document ID */
	_id?:true,
	/** Document type */
	_type?:true,
	/** Date the document was created */
	_createdAt?:true,
	/** Date the document was last modified */
	_updatedAt?:true,
	/** Current document revision */
	_rev?:true,
	_key?:true,
	originalFilename?:true,
	label?:true,
	title?:true,
	description?:true,
	sha1hash?:true,
	extension?:true,
	mimeType?:true,
	size?:true,
	assetId?:true,
	path?:true,
	url?:true,
	source?:ValueTypes["SanityAssetSourceData"],
		__typename?: true
}>;
	["SanityFileAssetFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	originalFilename?:string,
	/** All documents that are not equal to given value */
	originalFilename_not?:string,
	/** All documents contain (match) the given word/words */
	originalFilename_matches?:string,
	originalFilename_in?:string[],
	originalFilename_not_in?:string[],
	/** All documents that are equal to given value */
	label?:string,
	/** All documents that are not equal to given value */
	label_not?:string,
	/** All documents contain (match) the given word/words */
	label_matches?:string,
	label_in?:string[],
	label_not_in?:string[],
	/** All documents that are equal to given value */
	title?:string,
	/** All documents that are not equal to given value */
	title_not?:string,
	/** All documents contain (match) the given word/words */
	title_matches?:string,
	title_in?:string[],
	title_not_in?:string[],
	/** All documents that are equal to given value */
	description?:string,
	/** All documents that are not equal to given value */
	description_not?:string,
	/** All documents contain (match) the given word/words */
	description_matches?:string,
	description_in?:string[],
	description_not_in?:string[],
	/** All documents that are equal to given value */
	sha1hash?:string,
	/** All documents that are not equal to given value */
	sha1hash_not?:string,
	/** All documents contain (match) the given word/words */
	sha1hash_matches?:string,
	sha1hash_in?:string[],
	sha1hash_not_in?:string[],
	/** All documents that are equal to given value */
	extension?:string,
	/** All documents that are not equal to given value */
	extension_not?:string,
	/** All documents contain (match) the given word/words */
	extension_matches?:string,
	extension_in?:string[],
	extension_not_in?:string[],
	/** All documents that are equal to given value */
	mimeType?:string,
	/** All documents that are not equal to given value */
	mimeType_not?:string,
	/** All documents contain (match) the given word/words */
	mimeType_matches?:string,
	mimeType_in?:string[],
	mimeType_not_in?:string[],
	/** All documents that are equal to given value */
	size?:number,
	/** All documents that are not equal to given value */
	size_not?:number,
	/** All documents are less than given value */
	size_lt?:number,
	/** All documents are less than or equal to given value */
	size_lte?:number,
	/** All documents are greater than given value */
	size_gt?:number,
	/** All documents are greater than or equal to given value */
	size_gte?:number,
	/** All documents that are equal to given value */
	assetId?:string,
	/** All documents that are not equal to given value */
	assetId_not?:string,
	/** All documents contain (match) the given word/words */
	assetId_matches?:string,
	assetId_in?:string[],
	assetId_not_in?:string[],
	/** All documents that are equal to given value */
	path?:string,
	/** All documents that are not equal to given value */
	path_not?:string,
	/** All documents contain (match) the given word/words */
	path_matches?:string,
	path_in?:string[],
	path_not_in?:string[],
	/** All documents that are equal to given value */
	url?:string,
	/** All documents that are not equal to given value */
	url_not?:string,
	/** All documents contain (match) the given word/words */
	url_matches?:string,
	url_in?:string[],
	url_not_in?:string[],
	/** All documents that are drafts */
	is_draft?:boolean
};
	["SanityImageAsset"]: AliasType<{
	/** Document ID */
	_id?:true,
	/** Document type */
	_type?:true,
	/** Date the document was created */
	_createdAt?:true,
	/** Date the document was last modified */
	_updatedAt?:true,
	/** Current document revision */
	_rev?:true,
	_key?:true,
	originalFilename?:true,
	label?:true,
	title?:true,
	description?:true,
	sha1hash?:true,
	extension?:true,
	mimeType?:true,
	size?:true,
	assetId?:true,
	path?:true,
	url?:true,
	metadata?:ValueTypes["SanityImageMetadata"],
	source?:ValueTypes["SanityAssetSourceData"],
		__typename?: true
}>;
	["SanityImageAssetFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	originalFilename?:string,
	/** All documents that are not equal to given value */
	originalFilename_not?:string,
	/** All documents contain (match) the given word/words */
	originalFilename_matches?:string,
	originalFilename_in?:string[],
	originalFilename_not_in?:string[],
	/** All documents that are equal to given value */
	label?:string,
	/** All documents that are not equal to given value */
	label_not?:string,
	/** All documents contain (match) the given word/words */
	label_matches?:string,
	label_in?:string[],
	label_not_in?:string[],
	/** All documents that are equal to given value */
	title?:string,
	/** All documents that are not equal to given value */
	title_not?:string,
	/** All documents contain (match) the given word/words */
	title_matches?:string,
	title_in?:string[],
	title_not_in?:string[],
	/** All documents that are equal to given value */
	description?:string,
	/** All documents that are not equal to given value */
	description_not?:string,
	/** All documents contain (match) the given word/words */
	description_matches?:string,
	description_in?:string[],
	description_not_in?:string[],
	/** All documents that are equal to given value */
	sha1hash?:string,
	/** All documents that are not equal to given value */
	sha1hash_not?:string,
	/** All documents contain (match) the given word/words */
	sha1hash_matches?:string,
	sha1hash_in?:string[],
	sha1hash_not_in?:string[],
	/** All documents that are equal to given value */
	extension?:string,
	/** All documents that are not equal to given value */
	extension_not?:string,
	/** All documents contain (match) the given word/words */
	extension_matches?:string,
	extension_in?:string[],
	extension_not_in?:string[],
	/** All documents that are equal to given value */
	mimeType?:string,
	/** All documents that are not equal to given value */
	mimeType_not?:string,
	/** All documents contain (match) the given word/words */
	mimeType_matches?:string,
	mimeType_in?:string[],
	mimeType_not_in?:string[],
	/** All documents that are equal to given value */
	size?:number,
	/** All documents that are not equal to given value */
	size_not?:number,
	/** All documents are less than given value */
	size_lt?:number,
	/** All documents are less than or equal to given value */
	size_lte?:number,
	/** All documents are greater than given value */
	size_gt?:number,
	/** All documents are greater than or equal to given value */
	size_gte?:number,
	/** All documents that are equal to given value */
	assetId?:string,
	/** All documents that are not equal to given value */
	assetId_not?:string,
	/** All documents contain (match) the given word/words */
	assetId_matches?:string,
	assetId_in?:string[],
	assetId_not_in?:string[],
	/** All documents that are equal to given value */
	path?:string,
	/** All documents that are not equal to given value */
	path_not?:string,
	/** All documents contain (match) the given word/words */
	path_matches?:string,
	path_in?:string[],
	path_not_in?:string[],
	/** All documents that are equal to given value */
	url?:string,
	/** All documents that are not equal to given value */
	url_not?:string,
	/** All documents contain (match) the given word/words */
	url_matches?:string,
	url_in?:string[],
	url_not_in?:string[],
	/** All documents that are drafts */
	is_draft?:boolean
};
	["SanityImageCrop"]: AliasType<{
	_key?:true,
	_type?:true,
	top?:true,
	bottom?:true,
	left?:true,
	right?:true,
		__typename?: true
}>;
	["SanityImageDimensions"]: AliasType<{
	_key?:true,
	_type?:true,
	height?:true,
	width?:true,
	aspectRatio?:true,
		__typename?: true
}>;
	["SanityImageHotspot"]: AliasType<{
	_key?:true,
	_type?:true,
	x?:true,
	y?:true,
	height?:true,
	width?:true,
		__typename?: true
}>;
	["SanityImageMetadata"]: AliasType<{
	_key?:true,
	_type?:true,
	location?:ValueTypes["Geopoint"],
	dimensions?:ValueTypes["SanityImageDimensions"],
	palette?:ValueTypes["SanityImagePalette"],
	lqip?:true,
	hasAlpha?:true,
	isOpaque?:true,
		__typename?: true
}>;
	["SanityImagePalette"]: AliasType<{
	_key?:true,
	_type?:true,
	darkMuted?:ValueTypes["SanityImagePaletteSwatch"],
	lightVibrant?:ValueTypes["SanityImagePaletteSwatch"],
	darkVibrant?:ValueTypes["SanityImagePaletteSwatch"],
	vibrant?:ValueTypes["SanityImagePaletteSwatch"],
	dominant?:ValueTypes["SanityImagePaletteSwatch"],
	lightMuted?:ValueTypes["SanityImagePaletteSwatch"],
	muted?:ValueTypes["SanityImagePaletteSwatch"],
		__typename?: true
}>;
	["SanityImagePaletteSwatch"]: AliasType<{
	_key?:true,
	_type?:true,
	background?:true,
	foreground?:true,
	population?:true,
	title?:true,
		__typename?: true
}>;
	["SiteSettings"]: AliasType<{
	/** Document ID */
	_id?:true,
	/** Document type */
	_type?:true,
	/** Date the document was created */
	_createdAt?:true,
	/** Date the document was last modified */
	_updatedAt?:true,
	/** Current document revision */
	_rev?:true,
	_key?:true,
	restaurant?:ValueTypes["Restaurant"],
	showNavigation?:true,
	showLanguage?:true,
	/** Must be an ISO 4217 currency code (e.g. "USD" for US Dollar or "EUR" for Euro). */
	currency?:true,
	menuTitle?:ValueTypes["LocaleStringEngDefault"],
	information?:ValueTypes["Information"],
	styling?:ValueTypes["Styling"],
	orderSettings?:ValueTypes["OrderSettings"],
		__typename?: true
}>;
	["SiteSettingsFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:ValueTypes["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:ValueTypes["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:ValueTypes["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:ValueTypes["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:ValueTypes["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:ValueTypes["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	showNavigation?:boolean,
	/** All documents that are not equal to given value */
	showNavigation_not?:boolean,
	/** All documents that are equal to given value */
	showLanguage?:boolean,
	/** All documents that are not equal to given value */
	showLanguage_not?:boolean,
	/** All documents that are equal to given value */
	currency?:string,
	/** All documents that are not equal to given value */
	currency_not?:string,
	/** All documents contain (match) the given word/words */
	currency_matches?:string,
	currency_in?:string[],
	currency_not_in?:string[],
	/** All documents that are drafts */
	is_draft?:boolean
};
	["Slug"]: AliasType<{
	_key?:true,
	_type?:true,
	current?:true,
		__typename?: true
}>;
	["Span"]: AliasType<{
	_key?:true,
	_type?:true,
	marks?:true,
	text?:true,
		__typename?: true
}>;
	["Styling"]: AliasType<{
	_key?:true,
	_type?:true,
	/** Choose a font on https://fonts.google.com */
	textFont?:true,
	textColor?:true,
	backgroundColor?:ValueTypes["Color"],
	accentColor?:ValueTypes["Color"],
		__typename?: true
}>
  }

export type PartialObjects = {
    ["AlternativeAmountAndPrice"]: {
		__typename?: "AlternativeAmountAndPrice";
			_key?:string,
			_type?:string,
			amount?:PartialObjects["LocaleStringEngDefault"],
			price?:number
	},
	["Block"]: {
		__typename?: "Block";
			_key?:string,
			_type?:string,
			children?:(PartialObjects["Span"] | undefined)[],
			style?:string,
			list?:string
	},
	["Categories"]: {
		__typename?: "Categories";
			/** Document ID */
	_id?:string,
			/** Document type */
	_type?:string,
			/** Date the document was created */
	_createdAt?:PartialObjects["DateTime"],
			/** Date the document was last modified */
	_updatedAt?:PartialObjects["DateTime"],
			/** Current document revision */
	_rev?:string,
			_key?:string,
			format?:string,
			name?:PartialObjects["LocaleStringEngDefault"],
			/** Order your categories */
	priority?:number
	},
	["CategoriesFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	format?:string,
	/** All documents that are not equal to given value */
	format_not?:string,
	/** All documents contain (match) the given word/words */
	format_matches?:string,
	format_in?:string[],
	format_not_in?:string[],
	/** All documents that are equal to given value */
	priority?:number,
	/** All documents that are not equal to given value */
	priority_not?:number,
	/** All documents are less than given value */
	priority_lt?:number,
	/** All documents are less than or equal to given value */
	priority_lte?:number,
	/** All documents are greater than given value */
	priority_gt?:number,
	/** All documents are greater than or equal to given value */
	priority_gte?:number,
	/** All documents that are drafts */
	is_draft?:boolean
},
	["Color"]: {
		__typename?: "Color";
			_key?:string,
			_type?:string,
			hex?:string,
			alpha?:number,
			hsl?:PartialObjects["HslaColor"],
			hsv?:PartialObjects["HsvaColor"],
			rgb?:PartialObjects["RgbaColor"]
	},
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
`date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
8601 standard for representation of dates and times using the Gregorian calendar. */
["DateTime"]:any,
	/** A Sanity document */
["Document"]:{
		/** Document ID */
	_id?:string;
	/** Document type */
	_type?:string;
	/** Date the document was created */
	_createdAt?:PartialObjects["DateTime"];
	/** Date the document was last modified */
	_updatedAt?:PartialObjects["DateTime"];
	/** Current document revision */
	_rev?:string
} & (PartialObjects["Categories"] | PartialObjects["Items"] | PartialObjects["Option"] | PartialObjects["Optiongroup"] | PartialObjects["SanityFileAsset"] | PartialObjects["SanityImageAsset"] | PartialObjects["SiteSettings"]),
	["Figure"]: {
		__typename?: "Figure";
			_key?:string,
			_type?:string,
			asset?:PartialObjects["SanityImageAsset"],
			hotspot?:PartialObjects["SanityImageHotspot"],
			crop?:PartialObjects["SanityImageCrop"]
	},
	["File"]: {
		__typename?: "File";
			_key?:string,
			_type?:string,
			asset?:PartialObjects["SanityFileAsset"]
	},
	["Geopoint"]: {
		__typename?: "Geopoint";
			_key?:string,
			_type?:string,
			lat?:number,
			lng?:number,
			alt?:number
	},
	["HslaColor"]: {
		__typename?: "HslaColor";
			_key?:string,
			_type?:string,
			h?:number,
			s?:number,
			l?:number,
			a?:number
	},
	["HsvaColor"]: {
		__typename?: "HsvaColor";
			_key?:string,
			_type?:string,
			h?:number,
			s?:number,
			v?:number,
			a?:number
	},
	["Image"]: {
		__typename?: "Image";
			_key?:string,
			_type?:string,
			asset?:PartialObjects["SanityImageAsset"],
			hotspot?:PartialObjects["SanityImageHotspot"],
			crop?:PartialObjects["SanityImageCrop"]
	},
	["Information"]: {
		__typename?: "Information";
			_key?:string,
			_type?:string,
			introduction?:PartialObjects["LocaleBlockArray"],
			outroduction?:PartialObjects["LocaleBlockArray"]
	},
	["Items"]: {
		__typename?: "Items";
			/** Document ID */
	_id?:string,
			/** Document type */
	_type?:string,
			/** Date the document was created */
	_createdAt?:PartialObjects["DateTime"],
			/** Date the document was last modified */
	_updatedAt?:PartialObjects["DateTime"],
			/** Current document revision */
	_rev?:string,
			_key?:string,
			name?:PartialObjects["LocaleStringEngDefault"],
			category?:PartialObjects["Categories"],
			description?:PartialObjects["LocaleText"],
			vegan?:(string | undefined)[],
			allergens?:(string | undefined)[],
			meatOrigin?:PartialObjects["MeatOrigin"],
			amount?:PartialObjects["LocaleStringEngDefault"],
			price?:number,
			alternativeAmountAndPrice?:(PartialObjects["AlternativeAmountAndPrice"] | undefined)[],
			image?:PartialObjects["Figure"],
			/** Order your items */
	priority?:number,
			optionGroups?:(PartialObjects["Optiongroup"] | undefined)[]
	},
	["ItemsFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	category?:string,
	/** All documents that are equal to given value */
	price?:number,
	/** All documents that are not equal to given value */
	price_not?:number,
	/** All documents are less than given value */
	price_lt?:number,
	/** All documents are less than or equal to given value */
	price_lte?:number,
	/** All documents are greater than given value */
	price_gt?:number,
	/** All documents are greater than or equal to given value */
	price_gte?:number,
	/** All documents that are equal to given value */
	priority?:number,
	/** All documents that are not equal to given value */
	priority_not?:number,
	/** All documents are less than given value */
	priority_lt?:number,
	/** All documents are less than or equal to given value */
	priority_lte?:number,
	/** All documents are greater than given value */
	priority_gt?:number,
	/** All documents are greater than or equal to given value */
	priority_gte?:number,
	/** All documents that are drafts */
	is_draft?:boolean
},
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
["JSON"]:any,
	["LocaleBlockArray"]: {
		__typename?: "LocaleBlockArray";
			_key?:string,
			_type?:string,
			deRaw?:PartialObjects["JSON"]
	},
	["LocaleStringEngDefault"]: {
		__typename?: "LocaleStringEngDefault";
			_key?:string,
			_type?:string,
			de?:string
	},
	["LocaleText"]: {
		__typename?: "LocaleText";
			_key?:string,
			_type?:string,
			de?:string
	},
	["LocaleTextEngDefault"]: {
		__typename?: "LocaleTextEngDefault";
			_key?:string,
			_type?:string,
			de?:string
	},
	["MeatOrigin"]: {
		__typename?: "MeatOrigin";
			_key?:string,
			_type?:string,
			beef?:string,
			pork?:string,
			chicken?:string,
			otherMeat?:(string | undefined)[]
	},
	["Option"]: {
		__typename?: "Option";
			/** Document ID */
	_id?:string,
			/** Document type */
	_type?:string,
			/** Date the document was created */
	_createdAt?:PartialObjects["DateTime"],
			/** Date the document was last modified */
	_updatedAt?:PartialObjects["DateTime"],
			/** Current document revision */
	_rev?:string,
			_key?:string,
			name?:PartialObjects["LocaleStringEngDefault"],
			price?:number
	},
	["OptionFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	price?:number,
	/** All documents that are not equal to given value */
	price_not?:number,
	/** All documents are less than given value */
	price_lt?:number,
	/** All documents are less than or equal to given value */
	price_lte?:number,
	/** All documents are greater than given value */
	price_gt?:number,
	/** All documents are greater than or equal to given value */
	price_gte?:number,
	/** All documents that are drafts */
	is_draft?:boolean
},
	["Optiongroup"]: {
		__typename?: "Optiongroup";
			/** Document ID */
	_id?:string,
			/** Document type */
	_type?:string,
			/** Date the document was created */
	_createdAt?:PartialObjects["DateTime"],
			/** Date the document was last modified */
	_updatedAt?:PartialObjects["DateTime"],
			/** Current document revision */
	_rev?:string,
			_key?:string,
			name?:PartialObjects["LocaleStringEngDefault"],
			multiSelect?:boolean,
			options?:(PartialObjects["Option"] | undefined)[]
	},
	["OptiongroupFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	multiSelect?:boolean,
	/** All documents that are not equal to given value */
	multiSelect_not?:boolean,
	/** All documents that are drafts */
	is_draft?:boolean
},
	["OrderSettings"]: {
		__typename?: "OrderSettings";
			_key?:string,
			_type?:string,
			email?:string,
			numberOfTables?:number
	},
	["Restaurant"]: {
		__typename?: "Restaurant";
			_key?:string,
			_type?:string,
			name?:string,
			description?:PartialObjects["LocaleTextEngDefault"]
	},
	["RgbaColor"]: {
		__typename?: "RgbaColor";
			_key?:string,
			_type?:string,
			r?:number,
			g?:number,
			b?:number,
			a?:number
	},
	["RootQuery"]: {
		__typename?: "RootQuery";
			SiteSettings?:PartialObjects["SiteSettings"],
			Categories?:PartialObjects["Categories"],
			Items?:PartialObjects["Items"],
			Optiongroup?:PartialObjects["Optiongroup"],
			Option?:PartialObjects["Option"],
			SanityImageAsset?:PartialObjects["SanityImageAsset"],
			SanityFileAsset?:PartialObjects["SanityFileAsset"],
			allSiteSettings?:PartialObjects["SiteSettings"][],
			allCategories?:PartialObjects["Categories"][],
			allItems?:PartialObjects["Items"][],
			allOptiongroups?:PartialObjects["Optiongroup"][],
			allOptions?:PartialObjects["Option"][],
			allSanityImageAssets?:PartialObjects["SanityImageAsset"][],
			allSanityFileAssets?:PartialObjects["SanityFileAsset"][]
	},
	["SanityAssetSourceData"]: {
		__typename?: "SanityAssetSourceData";
			_key?:string,
			_type?:string,
			/** A canonical name for the source this asset is originating from */
	name?:string,
			/** The unique ID for the asset within the originating source so you can programatically find back to it */
	id?:string,
			/** A URL to find more information about this asset in the originating source */
	url?:string
	},
	["SanityFileAsset"]: {
		__typename?: "SanityFileAsset";
			/** Document ID */
	_id?:string,
			/** Document type */
	_type?:string,
			/** Date the document was created */
	_createdAt?:PartialObjects["DateTime"],
			/** Date the document was last modified */
	_updatedAt?:PartialObjects["DateTime"],
			/** Current document revision */
	_rev?:string,
			_key?:string,
			originalFilename?:string,
			label?:string,
			title?:string,
			description?:string,
			sha1hash?:string,
			extension?:string,
			mimeType?:string,
			size?:number,
			assetId?:string,
			path?:string,
			url?:string,
			source?:PartialObjects["SanityAssetSourceData"]
	},
	["SanityFileAssetFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	originalFilename?:string,
	/** All documents that are not equal to given value */
	originalFilename_not?:string,
	/** All documents contain (match) the given word/words */
	originalFilename_matches?:string,
	originalFilename_in?:string[],
	originalFilename_not_in?:string[],
	/** All documents that are equal to given value */
	label?:string,
	/** All documents that are not equal to given value */
	label_not?:string,
	/** All documents contain (match) the given word/words */
	label_matches?:string,
	label_in?:string[],
	label_not_in?:string[],
	/** All documents that are equal to given value */
	title?:string,
	/** All documents that are not equal to given value */
	title_not?:string,
	/** All documents contain (match) the given word/words */
	title_matches?:string,
	title_in?:string[],
	title_not_in?:string[],
	/** All documents that are equal to given value */
	description?:string,
	/** All documents that are not equal to given value */
	description_not?:string,
	/** All documents contain (match) the given word/words */
	description_matches?:string,
	description_in?:string[],
	description_not_in?:string[],
	/** All documents that are equal to given value */
	sha1hash?:string,
	/** All documents that are not equal to given value */
	sha1hash_not?:string,
	/** All documents contain (match) the given word/words */
	sha1hash_matches?:string,
	sha1hash_in?:string[],
	sha1hash_not_in?:string[],
	/** All documents that are equal to given value */
	extension?:string,
	/** All documents that are not equal to given value */
	extension_not?:string,
	/** All documents contain (match) the given word/words */
	extension_matches?:string,
	extension_in?:string[],
	extension_not_in?:string[],
	/** All documents that are equal to given value */
	mimeType?:string,
	/** All documents that are not equal to given value */
	mimeType_not?:string,
	/** All documents contain (match) the given word/words */
	mimeType_matches?:string,
	mimeType_in?:string[],
	mimeType_not_in?:string[],
	/** All documents that are equal to given value */
	size?:number,
	/** All documents that are not equal to given value */
	size_not?:number,
	/** All documents are less than given value */
	size_lt?:number,
	/** All documents are less than or equal to given value */
	size_lte?:number,
	/** All documents are greater than given value */
	size_gt?:number,
	/** All documents are greater than or equal to given value */
	size_gte?:number,
	/** All documents that are equal to given value */
	assetId?:string,
	/** All documents that are not equal to given value */
	assetId_not?:string,
	/** All documents contain (match) the given word/words */
	assetId_matches?:string,
	assetId_in?:string[],
	assetId_not_in?:string[],
	/** All documents that are equal to given value */
	path?:string,
	/** All documents that are not equal to given value */
	path_not?:string,
	/** All documents contain (match) the given word/words */
	path_matches?:string,
	path_in?:string[],
	path_not_in?:string[],
	/** All documents that are equal to given value */
	url?:string,
	/** All documents that are not equal to given value */
	url_not?:string,
	/** All documents contain (match) the given word/words */
	url_matches?:string,
	url_in?:string[],
	url_not_in?:string[],
	/** All documents that are drafts */
	is_draft?:boolean
},
	["SanityImageAsset"]: {
		__typename?: "SanityImageAsset";
			/** Document ID */
	_id?:string,
			/** Document type */
	_type?:string,
			/** Date the document was created */
	_createdAt?:PartialObjects["DateTime"],
			/** Date the document was last modified */
	_updatedAt?:PartialObjects["DateTime"],
			/** Current document revision */
	_rev?:string,
			_key?:string,
			originalFilename?:string,
			label?:string,
			title?:string,
			description?:string,
			sha1hash?:string,
			extension?:string,
			mimeType?:string,
			size?:number,
			assetId?:string,
			path?:string,
			url?:string,
			metadata?:PartialObjects["SanityImageMetadata"],
			source?:PartialObjects["SanityAssetSourceData"]
	},
	["SanityImageAssetFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	originalFilename?:string,
	/** All documents that are not equal to given value */
	originalFilename_not?:string,
	/** All documents contain (match) the given word/words */
	originalFilename_matches?:string,
	originalFilename_in?:string[],
	originalFilename_not_in?:string[],
	/** All documents that are equal to given value */
	label?:string,
	/** All documents that are not equal to given value */
	label_not?:string,
	/** All documents contain (match) the given word/words */
	label_matches?:string,
	label_in?:string[],
	label_not_in?:string[],
	/** All documents that are equal to given value */
	title?:string,
	/** All documents that are not equal to given value */
	title_not?:string,
	/** All documents contain (match) the given word/words */
	title_matches?:string,
	title_in?:string[],
	title_not_in?:string[],
	/** All documents that are equal to given value */
	description?:string,
	/** All documents that are not equal to given value */
	description_not?:string,
	/** All documents contain (match) the given word/words */
	description_matches?:string,
	description_in?:string[],
	description_not_in?:string[],
	/** All documents that are equal to given value */
	sha1hash?:string,
	/** All documents that are not equal to given value */
	sha1hash_not?:string,
	/** All documents contain (match) the given word/words */
	sha1hash_matches?:string,
	sha1hash_in?:string[],
	sha1hash_not_in?:string[],
	/** All documents that are equal to given value */
	extension?:string,
	/** All documents that are not equal to given value */
	extension_not?:string,
	/** All documents contain (match) the given word/words */
	extension_matches?:string,
	extension_in?:string[],
	extension_not_in?:string[],
	/** All documents that are equal to given value */
	mimeType?:string,
	/** All documents that are not equal to given value */
	mimeType_not?:string,
	/** All documents contain (match) the given word/words */
	mimeType_matches?:string,
	mimeType_in?:string[],
	mimeType_not_in?:string[],
	/** All documents that are equal to given value */
	size?:number,
	/** All documents that are not equal to given value */
	size_not?:number,
	/** All documents are less than given value */
	size_lt?:number,
	/** All documents are less than or equal to given value */
	size_lte?:number,
	/** All documents are greater than given value */
	size_gt?:number,
	/** All documents are greater than or equal to given value */
	size_gte?:number,
	/** All documents that are equal to given value */
	assetId?:string,
	/** All documents that are not equal to given value */
	assetId_not?:string,
	/** All documents contain (match) the given word/words */
	assetId_matches?:string,
	assetId_in?:string[],
	assetId_not_in?:string[],
	/** All documents that are equal to given value */
	path?:string,
	/** All documents that are not equal to given value */
	path_not?:string,
	/** All documents contain (match) the given word/words */
	path_matches?:string,
	path_in?:string[],
	path_not_in?:string[],
	/** All documents that are equal to given value */
	url?:string,
	/** All documents that are not equal to given value */
	url_not?:string,
	/** All documents contain (match) the given word/words */
	url_matches?:string,
	url_in?:string[],
	url_not_in?:string[],
	/** All documents that are drafts */
	is_draft?:boolean
},
	["SanityImageCrop"]: {
		__typename?: "SanityImageCrop";
			_key?:string,
			_type?:string,
			top?:number,
			bottom?:number,
			left?:number,
			right?:number
	},
	["SanityImageDimensions"]: {
		__typename?: "SanityImageDimensions";
			_key?:string,
			_type?:string,
			height?:number,
			width?:number,
			aspectRatio?:number
	},
	["SanityImageHotspot"]: {
		__typename?: "SanityImageHotspot";
			_key?:string,
			_type?:string,
			x?:number,
			y?:number,
			height?:number,
			width?:number
	},
	["SanityImageMetadata"]: {
		__typename?: "SanityImageMetadata";
			_key?:string,
			_type?:string,
			location?:PartialObjects["Geopoint"],
			dimensions?:PartialObjects["SanityImageDimensions"],
			palette?:PartialObjects["SanityImagePalette"],
			lqip?:string,
			hasAlpha?:boolean,
			isOpaque?:boolean
	},
	["SanityImagePalette"]: {
		__typename?: "SanityImagePalette";
			_key?:string,
			_type?:string,
			darkMuted?:PartialObjects["SanityImagePaletteSwatch"],
			lightVibrant?:PartialObjects["SanityImagePaletteSwatch"],
			darkVibrant?:PartialObjects["SanityImagePaletteSwatch"],
			vibrant?:PartialObjects["SanityImagePaletteSwatch"],
			dominant?:PartialObjects["SanityImagePaletteSwatch"],
			lightMuted?:PartialObjects["SanityImagePaletteSwatch"],
			muted?:PartialObjects["SanityImagePaletteSwatch"]
	},
	["SanityImagePaletteSwatch"]: {
		__typename?: "SanityImagePaletteSwatch";
			_key?:string,
			_type?:string,
			background?:string,
			foreground?:string,
			population?:number,
			title?:string
	},
	["SiteSettings"]: {
		__typename?: "SiteSettings";
			/** Document ID */
	_id?:string,
			/** Document type */
	_type?:string,
			/** Date the document was created */
	_createdAt?:PartialObjects["DateTime"],
			/** Date the document was last modified */
	_updatedAt?:PartialObjects["DateTime"],
			/** Current document revision */
	_rev?:string,
			_key?:string,
			restaurant?:PartialObjects["Restaurant"],
			showNavigation?:boolean,
			showLanguage?:boolean,
			/** Must be an ISO 4217 currency code (e.g. "USD" for US Dollar or "EUR" for Euro). */
	currency?:string,
			menuTitle?:PartialObjects["LocaleStringEngDefault"],
			information?:PartialObjects["Information"],
			styling?:PartialObjects["Styling"],
			orderSettings?:PartialObjects["OrderSettings"]
	},
	["SiteSettingsFilter"]: {
	/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_createdAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_createdAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_createdAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_createdAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_updatedAt?:PartialObjects["DateTime"],
	/** All documents that are not equal to given value */
	_updatedAt_not?:PartialObjects["DateTime"],
	/** All documents are less than given value */
	_updatedAt_lt?:PartialObjects["DateTime"],
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:PartialObjects["DateTime"],
	/** All documents are greater than given value */
	_updatedAt_gt?:PartialObjects["DateTime"],
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:PartialObjects["DateTime"],
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	showNavigation?:boolean,
	/** All documents that are not equal to given value */
	showNavigation_not?:boolean,
	/** All documents that are equal to given value */
	showLanguage?:boolean,
	/** All documents that are not equal to given value */
	showLanguage_not?:boolean,
	/** All documents that are equal to given value */
	currency?:string,
	/** All documents that are not equal to given value */
	currency_not?:string,
	/** All documents contain (match) the given word/words */
	currency_matches?:string,
	currency_in?:string[],
	currency_not_in?:string[],
	/** All documents that are drafts */
	is_draft?:boolean
},
	["Slug"]: {
		__typename?: "Slug";
			_key?:string,
			_type?:string,
			current?:string
	},
	["Span"]: {
		__typename?: "Span";
			_key?:string,
			_type?:string,
			marks?:(string | undefined)[],
			text?:string
	},
	["Styling"]: {
		__typename?: "Styling";
			_key?:string,
			_type?:string,
			/** Choose a font on https://fonts.google.com */
	textFont?:string,
			textColor?:string,
			backgroundColor?:PartialObjects["Color"],
			accentColor?:PartialObjects["Color"]
	}
  }





export type AlternativeAmountAndPrice = {
	__typename?: "AlternativeAmountAndPrice",
	_key?:string,
	_type?:string,
	amount?:LocaleStringEngDefault,
	price?:number
}

export type Block = {
	__typename?: "Block",
	_key?:string,
	_type?:string,
	children?:(Span | undefined)[],
	style?:string,
	list?:string
}

export type Categories = {
	__typename?: "Categories",
	/** Document ID */
	_id:string,
	/** Document type */
	_type:string,
	/** Date the document was created */
	_createdAt:DateTime,
	/** Date the document was last modified */
	_updatedAt:DateTime,
	/** Current document revision */
	_rev:string,
	_key?:string,
	format?:string,
	name?:LocaleStringEngDefault,
	/** Order your categories */
	priority?:number
}

export type CategoriesFilter = {
		/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:DateTime,
	/** All documents that are not equal to given value */
	_createdAt_not?:DateTime,
	/** All documents are less than given value */
	_createdAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_createdAt_lte?:DateTime,
	/** All documents are greater than given value */
	_createdAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_updatedAt?:DateTime,
	/** All documents that are not equal to given value */
	_updatedAt_not?:DateTime,
	/** All documents are less than given value */
	_updatedAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:DateTime,
	/** All documents are greater than given value */
	_updatedAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	format?:string,
	/** All documents that are not equal to given value */
	format_not?:string,
	/** All documents contain (match) the given word/words */
	format_matches?:string,
	format_in?:string[],
	format_not_in?:string[],
	/** All documents that are equal to given value */
	priority?:number,
	/** All documents that are not equal to given value */
	priority_not?:number,
	/** All documents are less than given value */
	priority_lt?:number,
	/** All documents are less than or equal to given value */
	priority_lte?:number,
	/** All documents are greater than given value */
	priority_gt?:number,
	/** All documents are greater than or equal to given value */
	priority_gte?:number,
	/** All documents that are drafts */
	is_draft?:boolean
}

export type Color = {
	__typename?: "Color",
	_key?:string,
	_type?:string,
	hex?:string,
	alpha?:number,
	hsl?:HslaColor,
	hsv?:HsvaColor,
	rgb?:RgbaColor
}

/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
`date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
8601 standard for representation of dates and times using the Gregorian calendar. */
export type DateTime = any

/** A Sanity document */
export type Document = {
	__interface:{
			/** Document ID */
	_id:string,
	/** Document type */
	_type:string,
	/** Date the document was created */
	_createdAt:DateTime,
	/** Date the document was last modified */
	_updatedAt:DateTime,
	/** Current document revision */
	_rev:string
	};
	__resolve:{
		['...on Categories']: Categories;
		['...on Items']: Items;
		['...on Option']: Option;
		['...on Optiongroup']: Optiongroup;
		['...on SanityFileAsset']: SanityFileAsset;
		['...on SanityImageAsset']: SanityImageAsset;
		['...on SiteSettings']: SiteSettings;
	}
}

export type Figure = {
	__typename?: "Figure",
	_key?:string,
	_type?:string,
	asset?:SanityImageAsset,
	hotspot?:SanityImageHotspot,
	crop?:SanityImageCrop
}

export type File = {
	__typename?: "File",
	_key?:string,
	_type?:string,
	asset?:SanityFileAsset
}

export type Geopoint = {
	__typename?: "Geopoint",
	_key?:string,
	_type?:string,
	lat?:number,
	lng?:number,
	alt?:number
}

export type HslaColor = {
	__typename?: "HslaColor",
	_key?:string,
	_type?:string,
	h?:number,
	s?:number,
	l?:number,
	a?:number
}

export type HsvaColor = {
	__typename?: "HsvaColor",
	_key?:string,
	_type?:string,
	h?:number,
	s?:number,
	v?:number,
	a?:number
}

export type Image = {
	__typename?: "Image",
	_key?:string,
	_type?:string,
	asset?:SanityImageAsset,
	hotspot?:SanityImageHotspot,
	crop?:SanityImageCrop
}

export type Information = {
	__typename?: "Information",
	_key?:string,
	_type?:string,
	introduction?:LocaleBlockArray,
	outroduction?:LocaleBlockArray
}

export type Items = {
	__typename?: "Items",
	/** Document ID */
	_id:string,
	/** Document type */
	_type:string,
	/** Date the document was created */
	_createdAt:DateTime,
	/** Date the document was last modified */
	_updatedAt:DateTime,
	/** Current document revision */
	_rev:string,
	_key?:string,
	name?:LocaleStringEngDefault,
	category?:Categories,
	description?:LocaleText,
	vegan?:(string | undefined)[],
	allergens?:(string | undefined)[],
	meatOrigin?:MeatOrigin,
	amount?:LocaleStringEngDefault,
	price?:number,
	alternativeAmountAndPrice?:(AlternativeAmountAndPrice | undefined)[],
	image?:Figure,
	/** Order your items */
	priority?:number,
	optionGroups?:(Optiongroup | undefined)[]
}

export type ItemsFilter = {
		/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:DateTime,
	/** All documents that are not equal to given value */
	_createdAt_not?:DateTime,
	/** All documents are less than given value */
	_createdAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_createdAt_lte?:DateTime,
	/** All documents are greater than given value */
	_createdAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_updatedAt?:DateTime,
	/** All documents that are not equal to given value */
	_updatedAt_not?:DateTime,
	/** All documents are less than given value */
	_updatedAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:DateTime,
	/** All documents are greater than given value */
	_updatedAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	category?:string,
	/** All documents that are equal to given value */
	price?:number,
	/** All documents that are not equal to given value */
	price_not?:number,
	/** All documents are less than given value */
	price_lt?:number,
	/** All documents are less than or equal to given value */
	price_lte?:number,
	/** All documents are greater than given value */
	price_gt?:number,
	/** All documents are greater than or equal to given value */
	price_gte?:number,
	/** All documents that are equal to given value */
	priority?:number,
	/** All documents that are not equal to given value */
	priority_not?:number,
	/** All documents are less than given value */
	priority_lt?:number,
	/** All documents are less than or equal to given value */
	priority_lte?:number,
	/** All documents are greater than given value */
	priority_gt?:number,
	/** All documents are greater than or equal to given value */
	priority_gte?:number,
	/** All documents that are drafts */
	is_draft?:boolean
}

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any

export type LocaleBlockArray = {
	__typename?: "LocaleBlockArray",
	_key?:string,
	_type?:string,
	deRaw?:JSON
}

export type LocaleStringEngDefault = {
	__typename?: "LocaleStringEngDefault",
	_key?:string,
	_type?:string,
	de?:string
}

export type LocaleText = {
	__typename?: "LocaleText",
	_key?:string,
	_type?:string,
	de?:string
}

export type LocaleTextEngDefault = {
	__typename?: "LocaleTextEngDefault",
	_key?:string,
	_type?:string,
	de?:string
}

export type MeatOrigin = {
	__typename?: "MeatOrigin",
	_key?:string,
	_type?:string,
	beef?:string,
	pork?:string,
	chicken?:string,
	otherMeat?:(string | undefined)[]
}

export type Option = {
	__typename?: "Option",
	/** Document ID */
	_id:string,
	/** Document type */
	_type:string,
	/** Date the document was created */
	_createdAt:DateTime,
	/** Date the document was last modified */
	_updatedAt:DateTime,
	/** Current document revision */
	_rev:string,
	_key?:string,
	name?:LocaleStringEngDefault,
	price?:number
}

export type OptionFilter = {
		/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:DateTime,
	/** All documents that are not equal to given value */
	_createdAt_not?:DateTime,
	/** All documents are less than given value */
	_createdAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_createdAt_lte?:DateTime,
	/** All documents are greater than given value */
	_createdAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_updatedAt?:DateTime,
	/** All documents that are not equal to given value */
	_updatedAt_not?:DateTime,
	/** All documents are less than given value */
	_updatedAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:DateTime,
	/** All documents are greater than given value */
	_updatedAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	price?:number,
	/** All documents that are not equal to given value */
	price_not?:number,
	/** All documents are less than given value */
	price_lt?:number,
	/** All documents are less than or equal to given value */
	price_lte?:number,
	/** All documents are greater than given value */
	price_gt?:number,
	/** All documents are greater than or equal to given value */
	price_gte?:number,
	/** All documents that are drafts */
	is_draft?:boolean
}

export type Optiongroup = {
	__typename?: "Optiongroup",
	/** Document ID */
	_id:string,
	/** Document type */
	_type:string,
	/** Date the document was created */
	_createdAt:DateTime,
	/** Date the document was last modified */
	_updatedAt:DateTime,
	/** Current document revision */
	_rev:string,
	_key?:string,
	name?:LocaleStringEngDefault,
	multiSelect?:boolean,
	options?:(Option | undefined)[]
}

export type OptiongroupFilter = {
		/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:DateTime,
	/** All documents that are not equal to given value */
	_createdAt_not?:DateTime,
	/** All documents are less than given value */
	_createdAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_createdAt_lte?:DateTime,
	/** All documents are greater than given value */
	_createdAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_updatedAt?:DateTime,
	/** All documents that are not equal to given value */
	_updatedAt_not?:DateTime,
	/** All documents are less than given value */
	_updatedAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:DateTime,
	/** All documents are greater than given value */
	_updatedAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	multiSelect?:boolean,
	/** All documents that are not equal to given value */
	multiSelect_not?:boolean,
	/** All documents that are drafts */
	is_draft?:boolean
}

export type OrderSettings = {
	__typename?: "OrderSettings",
	_key?:string,
	_type?:string,
	email?:string,
	numberOfTables?:number
}

export type Restaurant = {
	__typename?: "Restaurant",
	_key?:string,
	_type?:string,
	name?:string,
	description?:LocaleTextEngDefault
}

export type RgbaColor = {
	__typename?: "RgbaColor",
	_key?:string,
	_type?:string,
	r?:number,
	g?:number,
	b?:number,
	a?:number
}

export type RootQuery = {
	__typename?: "RootQuery",
	SiteSettings?:SiteSettings,
	Categories?:Categories,
	Items?:Items,
	Optiongroup?:Optiongroup,
	Option?:Option,
	SanityImageAsset?:SanityImageAsset,
	SanityFileAsset?:SanityFileAsset,
	allSiteSettings:SiteSettings[],
	allCategories:Categories[],
	allItems:Items[],
	allOptiongroups:Optiongroup[],
	allOptions:Option[],
	allSanityImageAssets:SanityImageAsset[],
	allSanityFileAssets:SanityFileAsset[]
}

export type SanityAssetSourceData = {
	__typename?: "SanityAssetSourceData",
	_key?:string,
	_type?:string,
	/** A canonical name for the source this asset is originating from */
	name?:string,
	/** The unique ID for the asset within the originating source so you can programatically find back to it */
	id?:string,
	/** A URL to find more information about this asset in the originating source */
	url?:string
}

export type SanityFileAsset = {
	__typename?: "SanityFileAsset",
	/** Document ID */
	_id:string,
	/** Document type */
	_type:string,
	/** Date the document was created */
	_createdAt:DateTime,
	/** Date the document was last modified */
	_updatedAt:DateTime,
	/** Current document revision */
	_rev:string,
	_key?:string,
	originalFilename?:string,
	label?:string,
	title?:string,
	description?:string,
	sha1hash?:string,
	extension?:string,
	mimeType?:string,
	size?:number,
	assetId?:string,
	path?:string,
	url?:string,
	source?:SanityAssetSourceData
}

export type SanityFileAssetFilter = {
		/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:DateTime,
	/** All documents that are not equal to given value */
	_createdAt_not?:DateTime,
	/** All documents are less than given value */
	_createdAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_createdAt_lte?:DateTime,
	/** All documents are greater than given value */
	_createdAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_updatedAt?:DateTime,
	/** All documents that are not equal to given value */
	_updatedAt_not?:DateTime,
	/** All documents are less than given value */
	_updatedAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:DateTime,
	/** All documents are greater than given value */
	_updatedAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	originalFilename?:string,
	/** All documents that are not equal to given value */
	originalFilename_not?:string,
	/** All documents contain (match) the given word/words */
	originalFilename_matches?:string,
	originalFilename_in?:string[],
	originalFilename_not_in?:string[],
	/** All documents that are equal to given value */
	label?:string,
	/** All documents that are not equal to given value */
	label_not?:string,
	/** All documents contain (match) the given word/words */
	label_matches?:string,
	label_in?:string[],
	label_not_in?:string[],
	/** All documents that are equal to given value */
	title?:string,
	/** All documents that are not equal to given value */
	title_not?:string,
	/** All documents contain (match) the given word/words */
	title_matches?:string,
	title_in?:string[],
	title_not_in?:string[],
	/** All documents that are equal to given value */
	description?:string,
	/** All documents that are not equal to given value */
	description_not?:string,
	/** All documents contain (match) the given word/words */
	description_matches?:string,
	description_in?:string[],
	description_not_in?:string[],
	/** All documents that are equal to given value */
	sha1hash?:string,
	/** All documents that are not equal to given value */
	sha1hash_not?:string,
	/** All documents contain (match) the given word/words */
	sha1hash_matches?:string,
	sha1hash_in?:string[],
	sha1hash_not_in?:string[],
	/** All documents that are equal to given value */
	extension?:string,
	/** All documents that are not equal to given value */
	extension_not?:string,
	/** All documents contain (match) the given word/words */
	extension_matches?:string,
	extension_in?:string[],
	extension_not_in?:string[],
	/** All documents that are equal to given value */
	mimeType?:string,
	/** All documents that are not equal to given value */
	mimeType_not?:string,
	/** All documents contain (match) the given word/words */
	mimeType_matches?:string,
	mimeType_in?:string[],
	mimeType_not_in?:string[],
	/** All documents that are equal to given value */
	size?:number,
	/** All documents that are not equal to given value */
	size_not?:number,
	/** All documents are less than given value */
	size_lt?:number,
	/** All documents are less than or equal to given value */
	size_lte?:number,
	/** All documents are greater than given value */
	size_gt?:number,
	/** All documents are greater than or equal to given value */
	size_gte?:number,
	/** All documents that are equal to given value */
	assetId?:string,
	/** All documents that are not equal to given value */
	assetId_not?:string,
	/** All documents contain (match) the given word/words */
	assetId_matches?:string,
	assetId_in?:string[],
	assetId_not_in?:string[],
	/** All documents that are equal to given value */
	path?:string,
	/** All documents that are not equal to given value */
	path_not?:string,
	/** All documents contain (match) the given word/words */
	path_matches?:string,
	path_in?:string[],
	path_not_in?:string[],
	/** All documents that are equal to given value */
	url?:string,
	/** All documents that are not equal to given value */
	url_not?:string,
	/** All documents contain (match) the given word/words */
	url_matches?:string,
	url_in?:string[],
	url_not_in?:string[],
	/** All documents that are drafts */
	is_draft?:boolean
}

export type SanityImageAsset = {
	__typename?: "SanityImageAsset",
	/** Document ID */
	_id:string,
	/** Document type */
	_type:string,
	/** Date the document was created */
	_createdAt:DateTime,
	/** Date the document was last modified */
	_updatedAt:DateTime,
	/** Current document revision */
	_rev:string,
	_key?:string,
	originalFilename?:string,
	label?:string,
	title?:string,
	description?:string,
	sha1hash?:string,
	extension?:string,
	mimeType?:string,
	size?:number,
	assetId?:string,
	path?:string,
	url?:string,
	metadata?:SanityImageMetadata,
	source?:SanityAssetSourceData
}

export type SanityImageAssetFilter = {
		/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:DateTime,
	/** All documents that are not equal to given value */
	_createdAt_not?:DateTime,
	/** All documents are less than given value */
	_createdAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_createdAt_lte?:DateTime,
	/** All documents are greater than given value */
	_createdAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_updatedAt?:DateTime,
	/** All documents that are not equal to given value */
	_updatedAt_not?:DateTime,
	/** All documents are less than given value */
	_updatedAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:DateTime,
	/** All documents are greater than given value */
	_updatedAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	originalFilename?:string,
	/** All documents that are not equal to given value */
	originalFilename_not?:string,
	/** All documents contain (match) the given word/words */
	originalFilename_matches?:string,
	originalFilename_in?:string[],
	originalFilename_not_in?:string[],
	/** All documents that are equal to given value */
	label?:string,
	/** All documents that are not equal to given value */
	label_not?:string,
	/** All documents contain (match) the given word/words */
	label_matches?:string,
	label_in?:string[],
	label_not_in?:string[],
	/** All documents that are equal to given value */
	title?:string,
	/** All documents that are not equal to given value */
	title_not?:string,
	/** All documents contain (match) the given word/words */
	title_matches?:string,
	title_in?:string[],
	title_not_in?:string[],
	/** All documents that are equal to given value */
	description?:string,
	/** All documents that are not equal to given value */
	description_not?:string,
	/** All documents contain (match) the given word/words */
	description_matches?:string,
	description_in?:string[],
	description_not_in?:string[],
	/** All documents that are equal to given value */
	sha1hash?:string,
	/** All documents that are not equal to given value */
	sha1hash_not?:string,
	/** All documents contain (match) the given word/words */
	sha1hash_matches?:string,
	sha1hash_in?:string[],
	sha1hash_not_in?:string[],
	/** All documents that are equal to given value */
	extension?:string,
	/** All documents that are not equal to given value */
	extension_not?:string,
	/** All documents contain (match) the given word/words */
	extension_matches?:string,
	extension_in?:string[],
	extension_not_in?:string[],
	/** All documents that are equal to given value */
	mimeType?:string,
	/** All documents that are not equal to given value */
	mimeType_not?:string,
	/** All documents contain (match) the given word/words */
	mimeType_matches?:string,
	mimeType_in?:string[],
	mimeType_not_in?:string[],
	/** All documents that are equal to given value */
	size?:number,
	/** All documents that are not equal to given value */
	size_not?:number,
	/** All documents are less than given value */
	size_lt?:number,
	/** All documents are less than or equal to given value */
	size_lte?:number,
	/** All documents are greater than given value */
	size_gt?:number,
	/** All documents are greater than or equal to given value */
	size_gte?:number,
	/** All documents that are equal to given value */
	assetId?:string,
	/** All documents that are not equal to given value */
	assetId_not?:string,
	/** All documents contain (match) the given word/words */
	assetId_matches?:string,
	assetId_in?:string[],
	assetId_not_in?:string[],
	/** All documents that are equal to given value */
	path?:string,
	/** All documents that are not equal to given value */
	path_not?:string,
	/** All documents contain (match) the given word/words */
	path_matches?:string,
	path_in?:string[],
	path_not_in?:string[],
	/** All documents that are equal to given value */
	url?:string,
	/** All documents that are not equal to given value */
	url_not?:string,
	/** All documents contain (match) the given word/words */
	url_matches?:string,
	url_in?:string[],
	url_not_in?:string[],
	/** All documents that are drafts */
	is_draft?:boolean
}

export type SanityImageCrop = {
	__typename?: "SanityImageCrop",
	_key?:string,
	_type?:string,
	top?:number,
	bottom?:number,
	left?:number,
	right?:number
}

export type SanityImageDimensions = {
	__typename?: "SanityImageDimensions",
	_key?:string,
	_type?:string,
	height?:number,
	width?:number,
	aspectRatio?:number
}

export type SanityImageHotspot = {
	__typename?: "SanityImageHotspot",
	_key?:string,
	_type?:string,
	x?:number,
	y?:number,
	height?:number,
	width?:number
}

export type SanityImageMetadata = {
	__typename?: "SanityImageMetadata",
	_key?:string,
	_type?:string,
	location?:Geopoint,
	dimensions?:SanityImageDimensions,
	palette?:SanityImagePalette,
	lqip?:string,
	hasAlpha?:boolean,
	isOpaque?:boolean
}

export type SanityImagePalette = {
	__typename?: "SanityImagePalette",
	_key?:string,
	_type?:string,
	darkMuted?:SanityImagePaletteSwatch,
	lightVibrant?:SanityImagePaletteSwatch,
	darkVibrant?:SanityImagePaletteSwatch,
	vibrant?:SanityImagePaletteSwatch,
	dominant?:SanityImagePaletteSwatch,
	lightMuted?:SanityImagePaletteSwatch,
	muted?:SanityImagePaletteSwatch
}

export type SanityImagePaletteSwatch = {
	__typename?: "SanityImagePaletteSwatch",
	_key?:string,
	_type?:string,
	background?:string,
	foreground?:string,
	population?:number,
	title?:string
}

export type SiteSettings = {
	__typename?: "SiteSettings",
	/** Document ID */
	_id:string,
	/** Document type */
	_type:string,
	/** Date the document was created */
	_createdAt:DateTime,
	/** Date the document was last modified */
	_updatedAt:DateTime,
	/** Current document revision */
	_rev:string,
	_key?:string,
	restaurant?:Restaurant,
	showNavigation?:boolean,
	showLanguage?:boolean,
	/** Must be an ISO 4217 currency code (e.g. "USD" for US Dollar or "EUR" for Euro). */
	currency?:string,
	menuTitle?:LocaleStringEngDefault,
	information?:Information,
	styling?:Styling,
	orderSettings?:OrderSettings
}

export type SiteSettingsFilter = {
		/** All documents that are equal to given value */
	_id?:string,
	/** All documents that are not equal to given value */
	_id_not?:string,
	/** All documents contain (match) the given word/words */
	_id_matches?:string,
	_id_in?:string[],
	_id_not_in?:string[],
	/** All documents that are equal to given value */
	_type?:string,
	/** All documents that are not equal to given value */
	_type_not?:string,
	/** All documents contain (match) the given word/words */
	_type_matches?:string,
	_type_in?:string[],
	_type_not_in?:string[],
	/** All documents that are equal to given value */
	_createdAt?:DateTime,
	/** All documents that are not equal to given value */
	_createdAt_not?:DateTime,
	/** All documents are less than given value */
	_createdAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_createdAt_lte?:DateTime,
	/** All documents are greater than given value */
	_createdAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_createdAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_updatedAt?:DateTime,
	/** All documents that are not equal to given value */
	_updatedAt_not?:DateTime,
	/** All documents are less than given value */
	_updatedAt_lt?:DateTime,
	/** All documents are less than or equal to given value */
	_updatedAt_lte?:DateTime,
	/** All documents are greater than given value */
	_updatedAt_gt?:DateTime,
	/** All documents are greater than or equal to given value */
	_updatedAt_gte?:DateTime,
	/** All documents that are equal to given value */
	_rev?:string,
	/** All documents that are not equal to given value */
	_rev_not?:string,
	/** All documents contain (match) the given word/words */
	_rev_matches?:string,
	_rev_in?:string[],
	_rev_not_in?:string[],
	/** All documents that are equal to given value */
	_key?:string,
	/** All documents that are not equal to given value */
	_key_not?:string,
	/** All documents contain (match) the given word/words */
	_key_matches?:string,
	_key_in?:string[],
	_key_not_in?:string[],
	/** All documents that are equal to given value */
	showNavigation?:boolean,
	/** All documents that are not equal to given value */
	showNavigation_not?:boolean,
	/** All documents that are equal to given value */
	showLanguage?:boolean,
	/** All documents that are not equal to given value */
	showLanguage_not?:boolean,
	/** All documents that are equal to given value */
	currency?:string,
	/** All documents that are not equal to given value */
	currency_not?:string,
	/** All documents contain (match) the given word/words */
	currency_matches?:string,
	currency_in?:string[],
	currency_not_in?:string[],
	/** All documents that are drafts */
	is_draft?:boolean
}

export type Slug = {
	__typename?: "Slug",
	_key?:string,
	_type?:string,
	current?:string
}

export type Span = {
	__typename?: "Span",
	_key?:string,
	_type?:string,
	marks?:(string | undefined)[],
	text?:string
}

export type Styling = {
	__typename?: "Styling",
	_key?:string,
	_type?:string,
	/** Choose a font on https://fonts.google.com */
	textFont?:string,
	textColor?:string,
	backgroundColor?:Color,
	accentColor?:Color
}

export const AllTypesProps: Record<string,any> = {
	CategoriesFilter:{
		_id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_id_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_rev_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		format:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		format_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		format_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		format_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		format_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		priority:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority_not:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority_lt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority_lte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority_gt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority_gte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_draft:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	DateTime: "String",
	ItemsFilter:{
		_id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_id_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_rev_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		category:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		price:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_not:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_lt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_lte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_gt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_gte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority_not:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority_lt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority_lte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority_gt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		priority_gte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_draft:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	JSON: "String",
	OptionFilter:{
		_id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_id_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_rev_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		price:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_not:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_lt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_lte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_gt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		price_gte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_draft:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	OptiongroupFilter:{
		_id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_id_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_rev_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		multiSelect:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		multiSelect_not:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		is_draft:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	RootQuery:{
		SiteSettings:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		Categories:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		Items:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		Optiongroup:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		Option:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		SanityImageAsset:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		SanityFileAsset:{
			id:{
				type:"ID",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		allSiteSettings:{
			where:{
				type:"SiteSettingsFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allCategories:{
			where:{
				type:"CategoriesFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allItems:{
			where:{
				type:"ItemsFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allOptiongroups:{
			where:{
				type:"OptiongroupFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allOptions:{
			where:{
				type:"OptionFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allSanityImageAssets:{
			where:{
				type:"SanityImageAssetFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		allSanityFileAssets:{
			where:{
				type:"SanityFileAssetFilter",
				array:false,
				arrayRequired:false,
				required:false
			},
			limit:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			offset:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	SanityFileAssetFilter:{
		_id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_id_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_rev_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		originalFilename:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalFilename_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalFilename_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalFilename_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		originalFilename_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		label:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		label_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		label_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		label_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		label_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		title_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		description_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		sha1hash:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		sha1hash_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		sha1hash_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		sha1hash_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		sha1hash_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		extension:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		extension_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		extension_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		extension_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		extension_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		mimeType:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		mimeType_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		mimeType_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		mimeType_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		mimeType_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		size:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		size_not:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		size_lt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		size_lte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		size_gt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		size_gte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		assetId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		assetId_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		assetId_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		assetId_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		assetId_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		path:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		path_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		path_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		path_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		path_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		url:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		url_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		url_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		url_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		url_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		is_draft:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SanityImageAssetFilter:{
		_id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_id_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_rev_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		originalFilename:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalFilename_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalFilename_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		originalFilename_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		originalFilename_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		label:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		label_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		label_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		label_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		label_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		title_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		title_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		description_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		sha1hash:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		sha1hash_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		sha1hash_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		sha1hash_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		sha1hash_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		extension:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		extension_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		extension_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		extension_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		extension_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		mimeType:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		mimeType_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		mimeType_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		mimeType_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		mimeType_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		size:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		size_not:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		size_lt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		size_lte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		size_gt:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		size_gte:{
			type:"Float",
			array:false,
			arrayRequired:false,
			required:false
		},
		assetId:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		assetId_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		assetId_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		assetId_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		assetId_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		path:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		path_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		path_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		path_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		path_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		url:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		url_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		url_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		url_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		url_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		is_draft:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	SiteSettingsFilter:{
		_id:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_not:{
			type:"ID",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_id_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_id_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_type_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_type_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_createdAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_createdAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_not:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_lte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gt:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_updatedAt_gte:{
			type:"DateTime",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_rev_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_rev_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		_key_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		_key_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		showNavigation:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		showNavigation_not:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		showLanguage:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		showLanguage_not:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_not:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_matches:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		currency_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		currency_not_in:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:true
		},
		is_draft:{
			type:"Boolean",
			array:false,
			arrayRequired:false,
			required:false
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	AlternativeAmountAndPrice:{
		_key:"String",
		_type:"String",
		amount:"LocaleStringEngDefault",
		price:"Float"
	},
	Block:{
		_key:"String",
		_type:"String",
		children:"Span",
		style:"String",
		list:"String"
	},
	Categories:{
		_id:"ID",
		_type:"String",
		_createdAt:"DateTime",
		_updatedAt:"DateTime",
		_rev:"String",
		_key:"String",
		format:"String",
		name:"LocaleStringEngDefault",
		priority:"Float"
	},
	Color:{
		_key:"String",
		_type:"String",
		hex:"String",
		alpha:"Float",
		hsl:"HslaColor",
		hsv:"HsvaColor",
		rgb:"RgbaColor"
	},
	Document:{
		"...on Categories": "Categories",
		"...on Items": "Items",
		"...on Option": "Option",
		"...on Optiongroup": "Optiongroup",
		"...on SanityFileAsset": "SanityFileAsset",
		"...on SanityImageAsset": "SanityImageAsset",
		"...on SiteSettings": "SiteSettings",
		_id:"ID",
		_type:"String",
		_createdAt:"DateTime",
		_updatedAt:"DateTime",
		_rev:"String"
	},
	Figure:{
		_key:"String",
		_type:"String",
		asset:"SanityImageAsset",
		hotspot:"SanityImageHotspot",
		crop:"SanityImageCrop"
	},
	File:{
		_key:"String",
		_type:"String",
		asset:"SanityFileAsset"
	},
	Geopoint:{
		_key:"String",
		_type:"String",
		lat:"Float",
		lng:"Float",
		alt:"Float"
	},
	HslaColor:{
		_key:"String",
		_type:"String",
		h:"Float",
		s:"Float",
		l:"Float",
		a:"Float"
	},
	HsvaColor:{
		_key:"String",
		_type:"String",
		h:"Float",
		s:"Float",
		v:"Float",
		a:"Float"
	},
	Image:{
		_key:"String",
		_type:"String",
		asset:"SanityImageAsset",
		hotspot:"SanityImageHotspot",
		crop:"SanityImageCrop"
	},
	Information:{
		_key:"String",
		_type:"String",
		introduction:"LocaleBlockArray",
		outroduction:"LocaleBlockArray"
	},
	Items:{
		_id:"ID",
		_type:"String",
		_createdAt:"DateTime",
		_updatedAt:"DateTime",
		_rev:"String",
		_key:"String",
		name:"LocaleStringEngDefault",
		category:"Categories",
		description:"LocaleText",
		vegan:"String",
		allergens:"String",
		meatOrigin:"MeatOrigin",
		amount:"LocaleStringEngDefault",
		price:"Float",
		alternativeAmountAndPrice:"AlternativeAmountAndPrice",
		image:"Figure",
		priority:"Float",
		optionGroups:"Optiongroup"
	},
	LocaleBlockArray:{
		_key:"String",
		_type:"String",
		deRaw:"JSON"
	},
	LocaleStringEngDefault:{
		_key:"String",
		_type:"String",
		de:"String"
	},
	LocaleText:{
		_key:"String",
		_type:"String",
		de:"String"
	},
	LocaleTextEngDefault:{
		_key:"String",
		_type:"String",
		de:"String"
	},
	MeatOrigin:{
		_key:"String",
		_type:"String",
		beef:"String",
		pork:"String",
		chicken:"String",
		otherMeat:"String"
	},
	Option:{
		_id:"ID",
		_type:"String",
		_createdAt:"DateTime",
		_updatedAt:"DateTime",
		_rev:"String",
		_key:"String",
		name:"LocaleStringEngDefault",
		price:"Float"
	},
	Optiongroup:{
		_id:"ID",
		_type:"String",
		_createdAt:"DateTime",
		_updatedAt:"DateTime",
		_rev:"String",
		_key:"String",
		name:"LocaleStringEngDefault",
		multiSelect:"Boolean",
		options:"Option"
	},
	OrderSettings:{
		_key:"String",
		_type:"String",
		email:"String",
		numberOfTables:"Float"
	},
	Restaurant:{
		_key:"String",
		_type:"String",
		name:"String",
		description:"LocaleTextEngDefault"
	},
	RgbaColor:{
		_key:"String",
		_type:"String",
		r:"Float",
		g:"Float",
		b:"Float",
		a:"Float"
	},
	RootQuery:{
		SiteSettings:"SiteSettings",
		Categories:"Categories",
		Items:"Items",
		Optiongroup:"Optiongroup",
		Option:"Option",
		SanityImageAsset:"SanityImageAsset",
		SanityFileAsset:"SanityFileAsset",
		allSiteSettings:"SiteSettings",
		allCategories:"Categories",
		allItems:"Items",
		allOptiongroups:"Optiongroup",
		allOptions:"Option",
		allSanityImageAssets:"SanityImageAsset",
		allSanityFileAssets:"SanityFileAsset"
	},
	SanityAssetSourceData:{
		_key:"String",
		_type:"String",
		name:"String",
		id:"String",
		url:"String"
	},
	SanityFileAsset:{
		_id:"ID",
		_type:"String",
		_createdAt:"DateTime",
		_updatedAt:"DateTime",
		_rev:"String",
		_key:"String",
		originalFilename:"String",
		label:"String",
		title:"String",
		description:"String",
		sha1hash:"String",
		extension:"String",
		mimeType:"String",
		size:"Float",
		assetId:"String",
		path:"String",
		url:"String",
		source:"SanityAssetSourceData"
	},
	SanityImageAsset:{
		_id:"ID",
		_type:"String",
		_createdAt:"DateTime",
		_updatedAt:"DateTime",
		_rev:"String",
		_key:"String",
		originalFilename:"String",
		label:"String",
		title:"String",
		description:"String",
		sha1hash:"String",
		extension:"String",
		mimeType:"String",
		size:"Float",
		assetId:"String",
		path:"String",
		url:"String",
		metadata:"SanityImageMetadata",
		source:"SanityAssetSourceData"
	},
	SanityImageCrop:{
		_key:"String",
		_type:"String",
		top:"Float",
		bottom:"Float",
		left:"Float",
		right:"Float"
	},
	SanityImageDimensions:{
		_key:"String",
		_type:"String",
		height:"Float",
		width:"Float",
		aspectRatio:"Float"
	},
	SanityImageHotspot:{
		_key:"String",
		_type:"String",
		x:"Float",
		y:"Float",
		height:"Float",
		width:"Float"
	},
	SanityImageMetadata:{
		_key:"String",
		_type:"String",
		location:"Geopoint",
		dimensions:"SanityImageDimensions",
		palette:"SanityImagePalette",
		lqip:"String",
		hasAlpha:"Boolean",
		isOpaque:"Boolean"
	},
	SanityImagePalette:{
		_key:"String",
		_type:"String",
		darkMuted:"SanityImagePaletteSwatch",
		lightVibrant:"SanityImagePaletteSwatch",
		darkVibrant:"SanityImagePaletteSwatch",
		vibrant:"SanityImagePaletteSwatch",
		dominant:"SanityImagePaletteSwatch",
		lightMuted:"SanityImagePaletteSwatch",
		muted:"SanityImagePaletteSwatch"
	},
	SanityImagePaletteSwatch:{
		_key:"String",
		_type:"String",
		background:"String",
		foreground:"String",
		population:"Float",
		title:"String"
	},
	SiteSettings:{
		_id:"ID",
		_type:"String",
		_createdAt:"DateTime",
		_updatedAt:"DateTime",
		_rev:"String",
		_key:"String",
		restaurant:"Restaurant",
		showNavigation:"Boolean",
		showLanguage:"Boolean",
		currency:"String",
		menuTitle:"LocaleStringEngDefault",
		information:"Information",
		styling:"Styling",
		orderSettings:"OrderSettings"
	},
	Slug:{
		_key:"String",
		_type:"String",
		current:"String"
	},
	Span:{
		_key:"String",
		_type:"String",
		marks:"String",
		text:"String"
	},
	Styling:{
		_key:"String",
		_type:"String",
		textFont:"String",
		textColor:"String",
		backgroundColor:"Color",
		accentColor:"Color"
	}
}

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

type NotUndefined<T> = T extends undefined ? never : T;

export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
    __interface: infer INTERFACE;
    __resolve: infer IMPLEMENTORS;
  }
  ? { [Key in keyof DST]: Key extends keyof INTERFACE ? INTERFACE[Key] :
      Key extends keyof IMPLEMENTORS ? ObjectToUnion<
        Omit<
          {
            [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
            Omit<
              {
                [Key in keyof Omit<
                DST,
                keyof IMPLEMENTORS | '__typename'
                >]: Key extends keyof INTERFACE
                ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                : never;
              },
              keyof IMPLEMENTORS
              > &
            (DST extends { __typename: any }
              ? MapType<IMPLEMENTORS[Key], { __typename: true }>
              : {})
            : never;
          },
          keyof INTERFACE | '__typename'
          >
        > : never
  } : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? undefined
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

export type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z extends V>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;
type FetchFunction = (query: string, variables?: Record<string, any>) => any;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `"${value.replace(/"/g, '\\\"')}"`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
        if (isArrayRequired) {
            t = `${t}!`;
        }
        t = `[${t}]`;
        }
        if (isRequired) {
        t = `${t}!`;
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }  
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables);


const seekForAliases = (o: any) => {
  if (typeof o === 'object' && o) {
    const keys = Object.keys(o);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = o[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        o[alias] = {
          [operation]: value
        };
        delete o[k];
      } else {
        if (Array.isArray(value)) {
          value.forEach(seekForAliases);
        } else {
          if (typeof value === 'object') {
            seekForAliases(value);
          }
        }
      }
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          seekForAliases(response.data);
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        seekForAliases(response.data);
        return response.data;
      });
  };
  


export const Thunder = (fn: FetchFunction) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(fn)('query', 'RootQuery')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["RootQuery"],RootQuery>
});

export const Chain = (...options: fetchOptions) => ({
  query: ((o: any, variables) =>
    fullChainConstruct(apiFetch(options))('query', 'RootQuery')(o, variables).then(
      (response: any) => response
    )) as OperationToGraphQL<ValueTypes["RootQuery"],RootQuery>
});
export const Zeus = {
  query: (o:ValueTypes["RootQuery"]) => queryConstruct('query', 'RootQuery')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["RootQuery"],
  RootQuery
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["RootQuery"]>()
};
  

export const Gql = Chain('https://x5gcqqzx.api.sanity.io/v1/graphql/production/default')