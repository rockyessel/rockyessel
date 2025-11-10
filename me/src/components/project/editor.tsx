'use client';

import { Fragment, useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import TurbulenceNoise from '../common/turbulence-noise';

const ProjectEditorForm = () => {
  const [step, setStep] = useState(1);
  const [generalForm, setGeneralForm] = useState({
    name: '',
    slug: '',
    description: '',
    sourceCode: '',
    demo: '',
    tags: [],
    version: '',
    status: '',
  });
  const [technicalDetailsForm, setTechnicalDetailsForm] = useState({
    type: '',
    language: '',
    frameworks: [],
    database: '',
    blockchain: '',
    smartContractLanguage: '',
    hosting: '',
    CI_CD: '',
  });
  const [testingForm, setTestingForm] = useState({
    unitTests: false,
    integrationTests: false,
    tools: [],
  });

  const [performanceMetricsForm, setPerformanceMetricsForm] = useState({
    loadTime: '',
    lighthouseScore: '',
  });

  const [mediaForm, setMediaForm] = useState({
    images: [],
    videos: [],
    documents: [],
  });

  const [formData, setFormData] = useState({
    readme: '',
    general: generalForm,
    technicalDetails: {
      ...technicalDetailsForm,
      testing: testingForm,
      performanceMetrics: performanceMetricsForm,
      timeline: {
        startDate: '',
        endDate: '',
        duration: '',
      },
    },
    media: mediaForm,
    team: {
      teamSize: 0,
      roles: [],
      contributions: [],
    },
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='w-full space-y-4'>
            <h2 className='text-2xl font-bold'>General Details</h2>
            <Input
              type='text'
              name='general.name'
              value={formData.general.name}
              onChange={handleInputChange}
              placeholder='Project Name'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='general.slug'
              value={formData.general.slug}
              onChange={handleInputChange}
              placeholder='Slug (URL-friendly name)'
              className='w-full p-2 border rounded'
            />
            <Textarea
              name='general.description'
              value={formData.general.description}
              onChange={handleInputChange}
              placeholder='Short description of the project'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='general.sourceCode'
              value={formData.general.sourceCode}
              onChange={handleInputChange}
              placeholder='Source Code URL'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='general.demo'
              value={formData.general.demo}
              onChange={handleInputChange}
              placeholder='Demo URL'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='general.tags'
              value={formData.general.tags.join(', ')}
              onChange={handleInputChange}
              placeholder='Tags (comma-separated)'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='general.version'
              value={formData.general.version}
              onChange={handleInputChange}
              placeholder='Version'
              className='w-full p-2 border rounded'
            />

            <Select
              value={formData.general.status}
              onValueChange={handleInputChange}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select Status' />
              </SelectTrigger>
              <SelectContent>
                <TurbulenceNoise />
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value='completed'>Completed</SelectItem>
                  <SelectItem value='in-progress'>In Progress</SelectItem>
                  <SelectItem value='paused'>Paused</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        );
      case 2:
        return (
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Technical Details</h2>
            <Select
              value={formData.technicalDetails.type}
              onValueChange={handleInputChange}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select Type' />
              </SelectTrigger>
              <SelectContent>
                <TurbulenceNoise />
                <SelectGroup>
                  <SelectLabel>Type</SelectLabel>
                  <SelectItem value='web2'>Web2</SelectItem>
                  <SelectItem value='web3'>Web3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input
              type='text'
              name='technicalDetails.language'
              value={formData.technicalDetails.language}
              onChange={handleInputChange}
              placeholder='Programming Language'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='technicalDetails.frameworks'
              value={formData.technicalDetails.frameworks.join(', ')}
              onChange={handleInputChange}
              placeholder='Frameworks (comma-separated)'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='technicalDetails.database'
              value={formData.technicalDetails.database}
              onChange={handleInputChange}
              placeholder='Database Technology'
              className='w-full p-2 border rounded'
            />
            {formData.technicalDetails.type === 'web3' && (
              <Fragment>
                <Input
                  type='text'
                  name='technicalDetails.blockchain'
                  value={formData.technicalDetails.blockchain}
                  onChange={handleInputChange}
                  placeholder='Blockchain (e.g., Ethereum, Solana)'
                  className='w-full p-2 border rounded'
                />
                <Input
                  type='text'
                  name='technicalDetails.smartContractLanguage'
                  value={formData.technicalDetails.smartContractLanguage}
                  onChange={handleInputChange}
                  placeholder='Smart Contract Language'
                  className='w-full p-2 border rounded'
                />
              </Fragment>
            )}
            <Input
              type='text'
              name='technicalDetails.hosting'
              value={formData.technicalDetails.hosting}
              onChange={handleInputChange}
              placeholder='Hosting Platform (e.g., Vercel, AWS)'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='technicalDetails.CI_CD'
              value={formData.technicalDetails.CI_CD}
              onChange={handleInputChange}
              placeholder='CI/CD Tools (e.g., GitHub Actions)'
              className='w-full p-2 border rounded'
            />
            <h3 className='text-xl font-bold'>Testing</h3>
            <div className='flex items-center space-x-2'>
              <Input
                type='checkbox'
                name='technicalDetails.testing.unitTests'
                checked={formData.technicalDetails.testing.unitTests}
                onChange={() =>
                  setFormData({
                    ...formData,
                    technicalDetails: {
                      ...formData.technicalDetails,
                      testing: {
                        ...formData.technicalDetails.testing,
                        unitTests: !formData.technicalDetails.testing.unitTests,
                      },
                    },
                  })
                }
              />
              <label>Unit Tests</label>
            </div>
            <div className='flex items-center space-x-2'>
              <Input
                type='checkbox'
                name='technicalDetails.testing.integrationTests'
                checked={formData.technicalDetails.testing.integrationTests}
                onChange={() =>
                  setFormData({
                    ...formData,
                    technicalDetails: {
                      ...formData.technicalDetails,
                      testing: {
                        ...formData.technicalDetails.testing,
                        integrationTests:
                          !formData.technicalDetails.testing.integrationTests,
                      },
                    },
                  })
                }
              />
              <label>Integration Tests</label>
            </div>
            <Input
              type='text'
              name='technicalDetails.testing.tools'
              value={formData.technicalDetails.testing.tools.join(', ')}
              onChange={handleInputChange}
              placeholder='Testing Tools (comma-separated)'
              className='w-full p-2 border rounded'
            />
          </div>
        );
      case 3:
        return (
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Media and Team</h2>
            {/* Add fields for media, team, and other sections here */}
            <Input
              type='text'
              name='media.images'
              value={formData.media.images.join(', ')}
              onChange={handleInputChange}
              placeholder='Image URLs (comma-separated)'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='media.videos'
              value={formData.media.videos.join(', ')}
              onChange={handleInputChange}
              placeholder='Video URLs (comma-separated)'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='media.documents'
              value={formData.media.documents
                .map((doc: any) => doc.url)
                .join(', ')}
              onChange={handleInputChange}
              placeholder='Document URLs (comma-separated)'
              className='w-full p-2 border rounded'
            />
            <h3 className='text-xl font-bold'>Team</h3>
            <Input
              type='number'
              name='team.teamSize'
              value={formData.team.teamSize}
              onChange={handleInputChange}
              placeholder='Team Size'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='team.roles'
              value={formData.team.roles.join(', ')}
              onChange={handleInputChange}
              placeholder='Team Roles (comma-separated)'
              className='w-full p-2 border rounded'
            />
            <Input
              type='text'
              name='team.contributions'
              value={formData.team.contributions.join(', ')}
              onChange={handleInputChange}
              placeholder='Contributions (comma-separated)'
              className='w-full p-2 border rounded'
            />
          </div>
        );
      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <div className='w-full'>
      <h1 className='text-3xl font-bold mb-6'>{`Let's get you started`}</h1>
      <p className='mb-6 text-gray-600'>Enter the details to get going</p>
      <div className='w-full flex justify-between mb-8'>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex items-center ${
              step >= i ? 'text-lime-600' : 'text-gray-400'
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 ${
                step >= i ? 'border-lime-600' : 'border-gray-400'
              }`}
            >
              {i}
            </div>
            <span>
              {i === 1
                ? 'General Details'
                : i === 2
                ? 'Event Details'
                : 'Pricing and Submit'}
            </span>
          </div>
        ))}
      </div>
      {renderStep()}
      <div className='flex justify-between mt-4'>
        {step > 1 && (
          <button
            onClick={handleBack}
            className='bg-gray-200 px-4 py-2 rounded hover:bg-gray-300'
          >
            <ChevronLeft />
            Back
          </button>
        )}
        {step < 3 && (
          <button
            onClick={handleNext}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          >
            Next
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectEditorForm;
