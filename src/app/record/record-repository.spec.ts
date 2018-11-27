/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

describe('RecordRepository', () => {

    let recordRepository: RecordRepository;
    let record1: Record;
    let record2: Record;
    let record3: Record;

    beforeEach(() => {

        recordRepository = new RecordRepository();

        record1 = new Record('TXT', 'KEY', 'VALUE');
        record2 = new Record('CNAME', 'www', 'wishtack.io');
        record3 = new Record('TXT', 'KEY', 'VALUE');

    });

    xit('should add records', () => {

        const recordListEmpty = recordRepository.getRecordList();

        expect(recordListEmpty).toEqual([]);

        recordRepository.addRecord(record1);
        recordRepository.addRecord(record2);
        recordRepository.addRecord(record3);

        const recordList = recordRepository.getRecordList();

        expect(recordList).toEqual([
            record1,
            record2,
            record3
        ]);

    });

    xit('should remove records', () => {

        recordRepository.addRecord(record1);
        recordRepository.addRecord(record2);
        recordRepository.addRecord(record3);

        recordRepository.removeRecord(record1);

        const recordList = recordRepository.getRecordList();

        expect(recordList).toEqual([
            record2,
            record3
        ]);

    });

    xit('should update records', () => {
        // @TODO update a record.
    });

});
