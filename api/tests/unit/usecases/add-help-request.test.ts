import { DbAddHelpRequest } from '@/usecases/implementation/help-requests/add-help-request'
import mockDate from 'mockdate'
import { MockHelpRequestRepository } from '../../mocks/help-request-repository'
import { MockUUIDGenerator } from '../../mocks/uuid-generator'
import { fakeHelpRequest, fakeHelpRequestParams } from '../../mocks/help-request'

describe('AddHelpRequest', () => {
  const mockRepository = new MockHelpRequestRepository() as jest.Mocked<MockHelpRequestRepository>
  const mockUUIDGenerator = new MockUUIDGenerator() as jest.Mocked<MockUUIDGenerator>
  const sut = new DbAddHelpRequest(mockRepository, mockUUIDGenerator)

  beforeAll(() => mockDate.set(new Date('2021')))
  afterAll(() => mockDate.reset())

  describe('UUID Generator', () => {
    it('Should call uuid generator once before call help request repository', async () => {
      const generate = jest.spyOn(mockUUIDGenerator, 'generate')
      const add = jest.spyOn(mockRepository, 'add')
      await sut.add(fakeHelpRequestParams)
      expect(generate).toHaveBeenCalled()

      // ensure UUID be generated *before* calling user registration method
      const generateCall = generate.mock.invocationCallOrder[0]
      const addCall = add.mock.invocationCallOrder[0]
      expect(generateCall).toBeLessThan(addCall)
    })
  })

  describe('Repository', () => {
    it('Should call HelpRequestRepository with correct values', async () => {
      const add = jest.spyOn(mockRepository, 'add')
      await sut.add(fakeHelpRequestParams)
      expect(add).toHaveBeenCalledWith(fakeHelpRequest)
    })

    it('Should return a new helpRequest on success', async () => {
      const helpRequest = await sut.add(fakeHelpRequestParams)
      expect(helpRequest).toEqual(expect.objectContaining(fakeHelpRequestParams))
    })

    it('Should throw if HelpRequestRepository throws', async () => {
      mockRepository.add.mockRejectedValueOnce(new Error())
      const helpRequest = sut.add(fakeHelpRequestParams)
      await expect(helpRequest).rejects.toThrow()
    })
  })
})
