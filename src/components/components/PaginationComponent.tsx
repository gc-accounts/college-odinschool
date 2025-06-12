import React from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationContent
} from '@/components/components/ui/pagination';

interface PaginationComponentProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
    currentPage,
    setCurrentPage,
    totalPages
}) => {
    const visiblePages = [1, 2, 3].filter(page => page <= totalPages);

    return (
        <Pagination className="mt-12">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                </PaginationItem>

                {visiblePages.map((pageNum) => (
                    <PaginationItem className='cursor-pointer' key={pageNum}>
                        <PaginationLink
                            onClick={() => setCurrentPage(pageNum)}
                            isActive={pageNum === currentPage}
                        >
                            {pageNum}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComponent;
