import { useState, useMemo } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useAsyncDebounce,
} from 'react-table';

import { IoAdd, IoArrowUp, IoArrowDown } from 'react-icons/io5';

import {
  Table,
  TableHead,
  TableBody,
  TableHeading,
  TableRow,
  TableData,
  TableProps,
} from './Table';
import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { IndeterminateCheckbox } from '../Checkbox/Checkbox';
import { Pagination } from '../Pagination/Pagination';
import { Search } from '../Search/Search';
import { Select } from '../Select/Select';

import makeData from './makeData';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <Search
      id="search"
      name="search"
      placeholder="Search pages by name"
      value={value || ''}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
    />
  );
}

const GetTable = ({ ...props }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Page name',
            accessor: 'name',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
        ],
      },
    ],
    [],
  );

  const data = useMemo(() => makeData(1000), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
        },
        ...columns,
      ]);
    },
  );

  return (
    <Card
      title="Pages"
      subtitle="Use your website to inform and excite."
      actions={[
        <Select
          options={[10, 20, 30, 40, 50].map((pageSize) => {
            const result = {
              value: pageSize,
              name: `Show ${pageSize}`,
            };
            return result;
          })}
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        ></Select>,
        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />,
        <Button before={<IoAdd />}>New page</Button>,
      ]}
      {...props}
    >
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeading
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted &&
                      (column.isSortedDesc ? <IoArrowDown /> : <IoArrowUp />)}
                  </span>
                </TableHeading>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <TableRow key={`${row}-${index}`} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableData
                      key={`${cell}-${index}`}
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </TableData>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Pagination pageCount={pageCount} onPageChange={gotoPage} />
    </Card>
  );
};

const Template: Story<TableProps> = (args) => <GetTable {...args} />;

export const Example = Template.bind({});
