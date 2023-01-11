import React, { ComponentType } from 'react';

export interface PaginationProps {
  /**
   * `className` - additional styles, like color
   */
  className?: string;
  /**
   * `totalPages` - total number of pages
   */
  totalPages: number;
  /**
   * `currentPage` - current page
   */
  currentPage: number;
  /**
   * `url` - Current complete URL of the page
   */
  url?: string;
  /**
   * `scrollToElementId` - To which element ID should we build our URL so auto scroll works?
   */
  renderItem?: (item: PaginationItemProps) => JSX.Element;
  onClick?: (page: number) => void;
}

export enum paginationItemType {
  page = 'page',
  ellipsis = 'ellipsis',
  slash = 'slash',
  previous = 'previous',
  next = 'next',
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IPaginationItem {
  type: paginationItemType;
  label?: string;
  page?: number;
  Component?: ComponentType<any> | string;
  isDisabled?: boolean;
  isCurrentPage?: boolean;
  onClick?: (itemNumber: number) => void;
}

export interface PaginationItemProps {
  type: paginationItemType;
  label?: string;
  page?: number;
  onClick?: (itemNumber: number) => void;
  href?: string;
  isCurrentPage?: boolean;
}

export interface PropsBasedOnComponent<T> {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      Component?: C;
    } & T &
      React.ComponentPropsWithRef<C>,
  ): JSX.Element | null;
}
