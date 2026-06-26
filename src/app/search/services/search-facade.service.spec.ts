import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IFhirPatient, IFhirPractitioner, IFhirSearchResponse } from '@red-probeaufgabe/types';
import { SearchFacadeService } from './search-facade.service';
import { PatientSearchService } from './patient-search.service';
import { PractitionerSearchService } from './practitioner-search.service';

const mockPatients: IFhirPatient[] = [
  { resourceType: 'Patient', id: 'p1' } as IFhirPatient,
  { resourceType: 'Patient', id: 'p2' } as IFhirPatient,
];

const mockPractitioners: IFhirPractitioner[] = [
  { resourceType: 'Practitioner', id: 'pr1' } as IFhirPractitioner,
  { resourceType: 'Practitioner', id: 'pr2' } as IFhirPractitioner,
];

const patientResponse: IFhirSearchResponse<IFhirPatient> = { total: 2, entry: mockPatients };
const practitionerResponse: IFhirSearchResponse<IFhirPractitioner> = { total: 2, entry: mockPractitioners };

describe('SearchFacadeService', () => {
  let service: SearchFacadeService;
  let patientSearchMock: jest.Mocked<PatientSearchService>;
  let practitionerSearchMock: jest.Mocked<PractitionerSearchService>;

  beforeEach(() => {
    patientSearchMock = {
      search: jest.fn().mockReturnValue(of(patientResponse)),
      findById: jest.fn().mockReturnValue(of(mockPatients[0])),
    } as unknown as jest.Mocked<PatientSearchService>;

    practitionerSearchMock = {
      search: jest.fn().mockReturnValue(of(practitionerResponse)),
      findById: jest.fn().mockReturnValue(of(mockPractitioners[0])),
    } as unknown as jest.Mocked<PractitionerSearchService>;

    TestBed.configureTestingModule({
      providers: [
        SearchFacadeService,
        { provide: PatientSearchService, useValue: patientSearchMock },
        { provide: PractitionerSearchService, useValue: practitionerSearchMock },
      ],
    });

    service = TestBed.inject(SearchFacadeService);
  });

  test('should init', () => {
    expect(service).toBeTruthy();
  });

  test('should find patients', (done) => {
    service.searchPatients('test').subscribe((result) => {
      expect(result.total).toBe(2);
      expect(result.entry).toEqual(mockPatients);
      expect(patientSearchMock.search).toHaveBeenCalledWith('test');
      done();
    });
  });

  test('should find practitioners', (done) => {
    service.searchPractitioners('test').subscribe((result) => {
      expect(result.total).toBe(2);
      expect(result.entry).toEqual(mockPractitioners);
      expect(practitionerSearchMock.search).toHaveBeenCalledWith('test');
      done();
    });
  });

  test('should find both', (done) => {
    service.searchAll('test').subscribe((result) => {
      expect(result.total).toBe(4);
      expect(result.entry.length).toBe(4);
      // mergeArrays interleaves: [p1, pr1, p2, pr2]
      expect(result.entry[0]).toEqual(mockPatients[0]);
      expect(result.entry[1]).toEqual(mockPractitioners[0]);
      expect(result.entry[2]).toEqual(mockPatients[1]);
      expect(result.entry[3]).toEqual(mockPractitioners[1]);
      done();
    });
  });

  /* eslint-disable @typescript-eslint/no-explicit-any */
  test('merge arrays', () => {
    const a = [1, 2, 3, 4];
    const b = ['a', 'b'];
    const result = (service as any).mergeArrays(a, b);
    expect(result).toEqual([1, 'a', 2, 'b', 3, 4]);
  });
  /* eslint-enable @typescript-eslint/no-explicit-any */
});
